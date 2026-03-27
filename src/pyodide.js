// ─── REAL PYTHON INTERPRETER (Pyodide — CPython compiled to WASM) ────────────

let pyodideInstance = null;
let pyodideLoading = false;
const pyodideCallbacks = [];

async function loadPyodideRuntime() {
  if (pyodideInstance) return pyodideInstance;
  if (pyodideLoading) {
    return new Promise(resolve => pyodideCallbacks.push(resolve));
  }
  pyodideLoading = true;
  // Load Pyodide from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
  document.head.appendChild(script);
  await new Promise(resolve => { script.onload = resolve; });
  // eslint-disable-next-line no-undef
  pyodideInstance = await loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
  });
  pyodideLoading = false;
  pyodideCallbacks.forEach(cb => cb(pyodideInstance));
  pyodideCallbacks.length = 0;
  return pyodideInstance;
}

export async function runPython(code) {
  try {
    const pyodide = await loadPyodideRuntime();
    // Capture stdout
    pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);
    pyodide.runPython(code);
    const stdout = pyodide.runPython('sys.stdout.getvalue()');
    const stderr = pyodide.runPython('sys.stderr.getvalue()');
    // Reset stdout/stderr
    pyodide.runPython('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__');
    if (stderr) return { output: stdout, error: stderr };
    return { output: stdout || '(no output)', error: null };
  } catch (e) {
    // Extract just the useful error message
    const msg = e.message || String(e);
    const lines = msg.split('\n');
    const useful = lines.filter(l => !l.startsWith('  File "<exec>"')).slice(-3).join('\n');
    return { output: '', error: useful || msg };
  }
}
