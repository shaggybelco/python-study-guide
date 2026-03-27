import { useState } from "react";
import { VIDEOS } from "./data";
import { splitContentIntoSections, renderContent } from "./renderContent";
import CodeEditor from "./CodeEditor";

export default function ChapterView({ chapter, onBack, onQuiz }) {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [showAllSections, setShowAllSections] = useState(false);

  const sections = splitContentIntoSections(chapter.content);
  const tryIts = chapter.tryIt || [];
  const isLast = sectionIdx >= sections.length - 1;
  const visibleSections = showAllSections ? sections : [sections[sectionIdx]];

  return (
    <div>
      <button onClick={onBack} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:14,fontWeight:600,marginBottom:12,padding:0}}>← Back</button>
      <div style={{background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
        <div style={{background:`linear-gradient(135deg,${chapter.color},${chapter.color}99)`,padding:'20px 24px',color:'#fff'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
            <div>
              <div style={{fontSize:32,marginBottom:4}}>{chapter.emoji}</div>
              <div style={{fontSize:11,fontWeight:700,opacity:.8}}>CHAPTER {chapter.id} • {chapter.level}</div>
              <h2 style={{margin:'4px 0 0',fontSize:20,fontWeight:800}}>{chapter.title}</h2>
            </div>
            <button onClick={()=>setShowAllSections(s=>!s)} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'#fff',borderRadius:8,padding:'5px 12px',fontSize:11,fontWeight:700,cursor:'pointer',marginTop:4}}>
              {showAllSections ? 'Step-by-Step' : 'Show All'}
            </button>
          </div>
          {!showAllSections && (
            <div style={{display:'flex',gap:3,marginTop:14}}>
              {sections.map((_,i)=>(
                <div key={i} style={{flex:1,height:4,borderRadius:2,background:i<=sectionIdx?'rgba(255,255,255,0.9)':'rgba(255,255,255,0.25)',transition:'background .3s',cursor:'pointer'}} onClick={()=>setSectionIdx(i)} />
              ))}
            </div>
          )}
          {!showAllSections && <div style={{color:'rgba(255,255,255,0.7)',fontSize:11,marginTop:6}}>Step {sectionIdx+1} of {sections.length}</div>}
        </div>
        <div style={{padding:24}}>
          {visibleSections.map((sec, si)=>{
            const actualIdx = showAllSections ? si : sectionIdx;
            return (
              <div key={actualIdx}>
                {renderContent(sec)}
                {tryIts.filter(t=>t.after===actualIdx).map((t,ti)=>(
                  <div key={ti} style={{margin:'16px 0',padding:16,background:'#f0fff8',borderRadius:12,border:'2px solid #4FC78A'}}>
                    <div style={{fontWeight:700,fontSize:14,marginBottom:8,color:'#1a7a4a'}}>✍️ {t.prompt}</div>
                    <CodeEditor starter={t.starter} />
                  </div>
                ))}
                {showAllSections && si < sections.length - 1 && <hr style={{border:'none',borderTop:'1px solid #eef0ff',margin:'20px 0'}} />}
              </div>
            );
          })}
          {(showAllSections || isLast) && VIDEOS[chapter.id] && (
            <div style={{marginTop:16,padding:14,background:'#fff4f0',borderRadius:10,display:'flex',alignItems:'center',gap:12}}>
              <span style={{fontSize:24}}>📹</span>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:'#F7774F'}}>RECOMMENDED VIDEO</div>
                <a href={VIDEOS[chapter.id].url} target="_blank" rel="noreferrer" style={{color:'#4F8EF7',fontWeight:600,fontSize:14}}>{VIDEOS[chapter.id].title} →</a>
              </div>
            </div>
          )}
        </div>
        <div style={{padding:'0 24px 24px',display:'flex',gap:10,flexWrap:'wrap'}}>
          {!showAllSections && sectionIdx > 0 && (
            <button onClick={()=>{setSectionIdx(s=>s-1);window.scrollTo({top:0,behavior:'smooth'});}} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>← Back</button>
          )}
          {!showAllSections && !isLast && (
            <button onClick={()=>{setSectionIdx(s=>s+1);window.scrollTo({top:0,behavior:'smooth'});}} style={{background:chapter.color,color:'#fff',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>Continue →</button>
          )}
          {(showAllSections || isLast) && (
            <button onClick={onQuiz} style={{background:chapter.color,color:'#fff',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>🧪 Take Quiz</button>
          )}
          <button onClick={onBack} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>← Chapters</button>
        </div>
      </div>
    </div>
  );
}
