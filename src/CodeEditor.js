import React, { useState, useRef } from 'react';
import { runPython } from './pyodide';

function CodeEditor({ starter = '', onRun, label = "Run Code ▶" }) {
  const [code, setCode] = useState(starter);
  const [result, setResult] = useState(null);
  const [running, setRunning] = useState(false);
  const ta = useRef();

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.current.selectionStart, en = ta.current.selectionEnd;
      const v = code.substring(0,s) + '    ' + code.substring(en);
      setCode(v);
      setTimeout(() => { ta.current.selectionStart = ta.current.selectionEnd = s+4; }, 0);
    }
  };

  const run = async () => {
    setRunning(true);
    setResult(null);
    try {
      const r = onRun ? await onRun(code) : await runPython(code);
      setResult(r);
    } catch (e) {
      setResult({ output: '', error: e.message });
    }
    setRunning(false);
  };

  return (
    <div style={{borderRadius:12,overflow:'hidden',border:'2px solid #2d2d3f',marginTop:12}}>
      <div style={{background:'#1a1a2e',padding:'6px 14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{color:'#888',fontSize:12}}>🐍 Python Editor</span>
        <button onClick={run} disabled={running} style={{background:running?'#888':'#4FC78A',color:'#fff',border:'none',borderRadius:6,padding:'4px 14px',fontWeight:700,fontSize:13,cursor:running?'wait':'pointer'}}>
          {running ? 'Running...' : label}
        </button>
      </div>
      <textarea ref={ta} value={code} onChange={e=>setCode(e.target.value)} onKeyDown={handleTab}
        spellCheck={false}
        style={{width:'100%',minHeight:120,background:'#1e1e2e',color:'#cdd6f4',border:'none',padding:'12px 16px',fontFamily:'monospace',fontSize:13,lineHeight:1.6,resize:'vertical',outline:'none',display:'block'}} />
      {running && (
        <div style={{background:'#1a1a2e',padding:'10px 16px',borderTop:'1px solid #333'}}>
          <div style={{color:'#F7C84F',fontSize:12}}>⏳ Loading Python engine (first run downloads ~10MB, then instant)...</div>
        </div>
      )}
      {result && (
        <div style={{background: result.error?'#2d1a1a':'#1a2d1a',padding:'10px 16px',borderTop:'1px solid #333'}}>
          <div style={{color:'#888',fontSize:11,marginBottom:4}}>Output:</div>
          <pre style={{color: result.error?'#f87171':'#86efac',margin:0,fontSize:13,whiteSpace:'pre-wrap'}}>{result.error || result.output}</pre>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
