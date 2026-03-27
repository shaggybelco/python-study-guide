import { CHEATSHEET } from "./data";

export default function CheatSheet() {
  return (
          <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
              <div>
                <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 2px'}}>📝 Python Cheat Sheet</h2>
                <p style={{color:'#888',fontSize:13,margin:0}}>Your quick reference for everything Python!</p>
              </div>
              <button onClick={()=>window.print()} style={{background:'#4F8EF7',color:'#fff',border:'none',borderRadius:10,padding:'9px 16px',fontWeight:700,fontSize:13,cursor:'pointer'}}>🖨️ Print</button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:14}}>
              {CHEATSHEET.map((cat,ci)=>(
                <div key={ci} style={{background:'#fff',borderRadius:14,padding:18,boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
                  <h3 style={{margin:'0 0 12px',fontSize:15,fontWeight:800}}>{cat.cat}</h3>
                  <table style={{width:'100%',borderCollapse:'collapse'}}>
                    <tbody>
                      {cat.items.map((item,ii)=>(
                        <tr key={ii} style={{borderBottom:'1px solid #f0f4ff'}}>
                          <td style={{padding:'6px 8px 6px 0',verticalAlign:'top'}}>
                            <code style={{background:'#f0f4ff',padding:'2px 6px',borderRadius:5,fontSize:12,fontFamily:'monospace',color:'#4F8EF7',display:'inline-block'}}>{item.code}</code>
                          </td>
                          <td style={{padding:'6px 0 6px 8px',fontSize:12,color:'#555',verticalAlign:'top'}}>{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            {/* Exam Prep */}
            <div style={{marginTop:20,background:'linear-gradient(135deg,#1a1a2e,#2d2d5e)',borderRadius:16,padding:24,color:'#fff'}}>
              <h3 style={{margin:'0 0 8px',fontSize:18}}>🎓 University Exam Prep Tips</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:12,marginTop:14}}>
                {[
                  {icon:'⚠️',tip:'Always indent with 4 spaces — Python will crash without it!'},
                  {icon:'🔍',tip:'Use == for comparison, = for assignment. Never mix them!'},
                  {icon:'📋',tip:'List indices start at 0, not 1. fruits[0] is the first item.'},
                  {icon:'♻️',tip:'Functions avoid repeating code — always use def for reusable blocks.'},
                  {icon:'🔁',tip:'range(5) gives 0,1,2,3,4 — it stops BEFORE the number given.'},
                  {icon:'🧯',tip:'Wrap risky code in try/except to prevent crashes.'},
                  {icon:'🔤',tip:'Strings are immutable — you cannot change a character directly.'},
                  {icon:'📖',tip:'Dictionaries are fast for lookups. Use them instead of long if-chains.'},
                ].map((t,i)=>(
                  <div key={i} style={{background:'rgba(255,255,255,0.08)',borderRadius:10,padding:14}}>
                    <div style={{fontSize:20,marginBottom:6}}>{t.icon}</div>
                    <p style={{margin:0,fontSize:13,lineHeight:1.6,color:'rgba(255,255,255,0.85)'}}>{t.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  );
}
