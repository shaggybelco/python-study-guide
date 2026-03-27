import { BADGES, chapters } from "./data";

export default function Dashboard({ xp, completedChapters, earnedBadges, challengeDone, quizScores, resetProgress }) {
  return (
          <div>
            <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 16px'}}>📊 Your Dashboard</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:12,marginBottom:20}}>
              {[
                {label:'XP Earned',val:xp,icon:'⚡',color:'#F7C84F'},
                {label:'Chapters Done',val:`${completedChapters.length}/${chapters.length}`,icon:'📚',color:'#4F8EF7'},
                {label:'Badges',val:earnedBadges.length,icon:'🏅',color:'#B44FF7'},
                {label:'Challenges',val:challengeDone.length,icon:'🎯',color:'#4FC78A'},
              ].map((s,i)=>(
                <div key={i} style={{background:'#fff',borderRadius:14,padding:'16px 14px',boxShadow:'0 2px 12px rgba(0,0,0,0.07)',borderTop:`4px solid ${s.color}`,textAlign:'center'}}>
                  <div style={{fontSize:28}}>{s.icon}</div>
                  <div style={{fontSize:22,fontWeight:800,color:s.color}}>{s.val}</div>
                  <div style={{fontSize:12,color:'#888'}}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Progress */}
            <div style={{background:'#fff',borderRadius:14,padding:20,boxShadow:'0 2px 12px rgba(0,0,0,0.07)',marginBottom:16}}>
              <h3 style={{margin:'0 0 14px',fontSize:16}}>📈 Chapter Progress</h3>
              {chapters.map(ch=>{
                const done = completedChapters.includes(ch.id);
                const qs = quizScores[ch.id];
                return (
                  <div key={ch.id} style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
                    <span style={{fontSize:18,width:28}}>{ch.emoji}</span>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:600,marginBottom:3}}>{ch.title}</div>
                      <div style={{background:'#f0f4ff',borderRadius:20,height:8}}>
                        <div style={{background:ch.color,borderRadius:20,height:8,width:done?'100%':'0%',transition:'width .5s'}} />
                      </div>
                    </div>
                    <span style={{fontSize:12,color:'#888',minWidth:60,textAlign:'right'}}>{done?(qs!==undefined?`Quiz: ${qs}/${ch.quiz.length}`:'✅ Done'):'Not started'}</span>
                  </div>
                );
              })}
            </div>
            {/* Badges */}
            <div style={{background:'#fff',borderRadius:14,padding:20,boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
              <h3 style={{margin:'0 0 14px',fontSize:16}}>🏅 Badges</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:10}}>
                {BADGES.map(b=>{
                  const earned = earnedBadges.includes(b.id);
                  return (
                    <div key={b.id} style={{textAlign:'center',padding:'14px 8px',borderRadius:12,background:earned?'#f0fff8':'#f8f9ff',border:`2px solid ${earned?'#4FC78A':'#eee'}`,opacity:earned?1:0.5}}>
                      <div style={{fontSize:28,marginBottom:4,filter:earned?'none':'grayscale(1)'}}>{b.icon}</div>
                      <div style={{fontSize:12,fontWeight:700}}>{b.label}</div>
                      <div style={{fontSize:10,color:'#888',marginTop:2}}>{b.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Reset */}
            <div style={{marginTop:20,textAlign:'center'}}>
              <button onClick={resetProgress}
                style={{background:'none',border:'2px solid #F74F4F',color:'#F74F4F',borderRadius:10,padding:'9px 20px',fontWeight:700,fontSize:13,cursor:'pointer'}}>
                🗑️ Reset All Progress
              </button>
            </div>
          </div>
  );
}
