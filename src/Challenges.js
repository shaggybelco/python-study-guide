import { DAILY_CHALLENGES } from "./data";
import { runPython } from "./pyodide";
import CodeEditor from "./CodeEditor";

export default function Challenges({ challengeDone, setChallengeDone, awardXP, awardBadge, showHint, setShowHint }) {
  return (
          <div>
            <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 4px'}}>🎯 Daily Challenges</h2>
            <p style={{color:'#888',fontSize:14,margin:'0 0 16px'}}>Practice real coding problems and earn XP!</p>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {DAILY_CHALLENGES.map(ch=>{
                const done = challengeDone.includes(ch.id);
                return (
                  <div key={ch.id} style={{background:'#fff',borderRadius:14,padding:20,boxShadow:'0 2px 12px rgba(0,0,0,0.07)',borderLeft:`5px solid ${ch.difficulty==='Beginner'?'#4FC78A':ch.difficulty==='Intermediate'?'#F7C84F':'#F74F4F'}`}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
                      <div>
                        <span style={{fontSize:11,fontWeight:700,color:ch.difficulty==='Beginner'?'#4FC78A':ch.difficulty==='Intermediate'?'#F7A84F':'#F74F4F'}}>{ch.difficulty}</span>
                        <h3 style={{margin:'2px 0',fontSize:16,fontWeight:800}}>{ch.title}</h3>
                      </div>
                      <div style={{display:'flex',gap:8,alignItems:'center'}}>
                        <span style={{background:'#fff4f0',color:'#F7774F',fontWeight:700,fontSize:12,padding:'3px 10px',borderRadius:20}}>⚡ +{ch.xp} XP</span>
                        {done && <span style={{fontSize:20}}>✅</span>}
                      </div>
                    </div>
                    <p style={{fontSize:14,color:'#555',margin:'0 0 10px'}}>{ch.desc}</p>
                    <div style={{marginBottom:8}}>
                      <button onClick={()=>setShowHint(h=>h===ch.id?null:ch.id)} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:8,padding:'5px 12px',fontWeight:600,fontSize:12,cursor:'pointer'}}>
                        💡 {showHint===ch.id?'Hide':'Show'} Hint
                      </button>
                      {showHint===ch.id && <p style={{marginTop:8,fontSize:13,color:'#B44FF7',fontWeight:600}}>💡 {ch.hint}</p>}
                    </div>
                    <CodeEditor starter={ch.starter} label={done?"Run Again ▶":"Submit ▶"} onRun={async (code)=>{
                      const r = await runPython(code);
                      if (!done) {
                        setChallengeDone(p=>[...p,ch.id]);
                        awardXP(ch.xp, ch.title);
                        awardBadge('challenger');
                      }
                      return r;
                    }} />
                  </div>
                );
              })}
            </div>
          </div>
  );
}
