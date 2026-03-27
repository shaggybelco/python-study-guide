// ─── REAL PYTHON INTERPRETER (Pyodide — CPython compiled to WASM) ────────────

let pyodideInstance = null;
let pyodideLoading = false;
let pyodideFailed = false;
const pyodideCallbacks = [];

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(
      'Could not load Python engine. Check your internet connection and try again.'
    )), ms))
  ]);
}

async function loadPyodideRuntime() {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideFailed) throw new Error('Python engine failed to load. Refresh the page to retry.');
  if (pyodideLoading) {
    return new Promise((resolve, reject) => pyodideCallbacks.push({ resolve, reject }));
  }
  pyodideLoading = true;
  try {
    // Load Pyodide from CDN with 30s timeout
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
    document.head.appendChild(script);
    await withTimeout(new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to download Python engine. Are you offline?'));
    }), 30000);
    // eslint-disable-next-line no-undef
    pyodideInstance = await withTimeout(loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
    }), 60000);
    pyodideLoading = false;
    pyodideCallbacks.forEach(cb => cb.resolve(pyodideInstance));
    pyodideCallbacks.length = 0;
    return pyodideInstance;
  } catch (e) {
    pyodideLoading = false;
    pyodideFailed = true;
    pyodideCallbacks.forEach(cb => cb.reject(e));
    pyodideCallbacks.length = 0;
    throw e;
  }
}

export async function runPython(code) {
  try {
    const pyodide = await loadPyodideRuntime();
    // Capture stdout/stderr
    pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);
    try {
      pyodide.runPython(code);
    } finally {
      // Always reset stdout/stderr, even if code crashes
      var stdout = '', stderr = '';
      try {
        stdout = pyodide.runPython('sys.stdout.getvalue()');
        stderr = pyodide.runPython('sys.stderr.getvalue()');
      } catch(_) {}
      pyodide.runPython('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__');
    }
    if (stderr) return { output: stdout, error: stderr };
    return { output: stdout || '(no output)', error: null };
  } catch (e) {
    const msg = e.message || String(e);
    // Clean up Python tracebacks to show just the useful part
    const lines = msg.split('\n');
    const useful = lines.filter(l => !l.startsWith('  File "<exec>"')).slice(-3).join('\n');
    return { output: '', error: useful || msg };
  }
}
