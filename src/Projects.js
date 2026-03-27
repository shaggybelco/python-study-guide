import { PROJECTS } from "./data";
import CodeEditor from "./CodeEditor";

export default function Projects() {
  return (
          <div>
            <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 4px'}}>💡 Real World Projects</h2>
            <p style={{color:'#888',fontSize:14,margin:'0 0 16px'}}>Apply what you've learned with mini projects!</p>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {PROJECTS.map(p=>(
                <div key={p.id} style={{background:'#fff',borderRadius:14,padding:20,boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
                    <div style={{display:'flex',gap:12,alignItems:'center'}}>
                      <span style={{fontSize:32}}>{p.icon}</span>
                      <div>
                        <div style={{fontSize:11,color:'#888',fontWeight:700}}>Chapter {p.chapter} Project • {p.difficulty}</div>
                        <h3 style={{margin:'2px 0',fontSize:16,fontWeight:800}}>{p.title}</h3>
                      </div>
                    </div>
                    <span style={{background:'#fff4f0',color:'#F7774F',fontWeight:700,fontSize:12,padding:'3px 10px',borderRadius:20}}>⚡ +{p.xp} XP</span>
                  </div>
                  <p style={{fontSize:14,color:'#555',margin:'0 0 12px'}}>{p.desc}</p>
                  <CodeEditor starter={p.starter} label="Run Project ▶" />
                  <details style={{marginTop:12}}>
                    <summary style={{cursor:'pointer',fontSize:13,color:'#B44FF7',fontWeight:700}}>👁️ Show Solution</summary>
                    <pre style={{background:'#1e1e2e',color:'#86efac',padding:14,borderRadius:10,fontSize:13,marginTop:8,overflowX:'auto'}}>{p.solution}</pre>
                  </details>
                </div>
              ))}
            </div>
          </div>
  );
}
