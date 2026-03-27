import React from "react";

export function splitContentIntoSections(text) {
  const lines = text.trim().split('\n');
  const sections = [];
  let currentLines = [];
  let inCode = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('```')) { inCode = !inCode; currentLines.push(line); continue; }
    if (inCode) { currentLines.push(line); continue; }
    const isBoldHeader = /^\*\*[^*]+\*\*/.test(line.trim());
    if (isBoldHeader && currentLines.length > 0) {
      sections.push(currentLines.join('\n'));
      currentLines = [line];
    } else {
      currentLines.push(line);
    }
  }
  if (currentLines.length > 0) sections.push(currentLines.join('\n'));
  return sections;
}

export function renderContent(text) {
  const lines = text.trim().split('\n');
  const result=[], codeLines=[]; let inCode=false, inTable=false, tableRows=[];
  const flushTable = () => {
    if (tableRows.length>1) {
      const headers = tableRows[0].split('|').filter(Boolean).map(h=>h.trim());
      const rows = tableRows.slice(2).map(r=>r.split('|').filter(Boolean).map(c=>c.trim()));
      result.push(<div key={result.length} style={{overflowX:'auto',margin:'12px 0'}}>
        <table style={{borderCollapse:'collapse',width:'100%',fontSize:14}}>
          <thead><tr>{headers.map((h,i)=><th key={i} style={{background:'#f0f4ff',padding:'8px 12px',border:'1px solid #ddd',textAlign:'left'}}>{h}</th>)}</tr></thead>
          <tbody>{rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j} style={{padding:'8px 12px',border:'1px solid #ddd'}} dangerouslySetInnerHTML={{__html:cell.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}} />)}</tr>)}</tbody>
        </table></div>);
    }
    tableRows.length=0; inTable=false;
  };
  lines.forEach((line,idx)=>{
    if (line.startsWith('```')) {
      if (inCode) { result.push(<pre key={result.length} style={{background:'#1e1e2e',color:'#cdd6f4',padding:16,borderRadius:10,overflowX:'auto',fontSize:13,lineHeight:1.6,margin:'12px 0'}}><code>{codeLines.join('\n')}</code></pre>); codeLines.length=0; inCode=false; } else inCode=true; return;
    }
    if (inCode) { codeLines.push(line); return; }
    if (line.startsWith('|')) { inTable=true; tableRows.push(line); return; } else if (inTable) flushTable();
    const html = line.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code style="background:#f0f4ff;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:13px">$1</code>');
    if (line.startsWith('- ')) result.push(<li key={result.length} style={{margin:'4px 0 4px 20px',fontSize:14}} dangerouslySetInnerHTML={{__html:html.slice(2)}} />);
    else if (line.trim()==='') result.push(<br key={result.length}/>);
    else result.push(<p key={result.length} style={{margin:'6px 0',fontSize:14,lineHeight:1.7}} dangerouslySetInnerHTML={{__html:html}} />);
  });
  if (inTable) flushTable();
  return result;
}
