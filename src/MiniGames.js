import { useState } from "react";
import { MINI_GAMES } from "./data";

export default function MiniGames({ awardBadge }) {
  const [gameIdx, setGameIdx] = useState(0);
  const [gameQIdx, setGameQIdx] = useState(0);
  const [gameInput, setGameInput] = useState('');
  const [gameResult, setGameResult] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  return (
          <div>
            <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 4px'}}>🎮 Coding Mini-Games</h2>
            <p style={{color:'#888',fontSize:14,margin:'0 0 16px'}}>Fun ways to test what you know!</p>
            <div style={{display:'flex',gap:10,marginBottom:20}}>
              {MINI_GAMES.map((g,i)=>(
                <button key={g.id} onClick={()=>{setGameIdx(i);setGameQIdx(0);setGameInput('');setGameResult(null);setGameScore(0);setGameFinished(false);}}
                  style={{flex:1,padding:'14px 10px',borderRadius:12,border:`2px solid ${gameIdx===i?'#4F8EF7':'#eee'}`,background:gameIdx===i?'#f0f4ff':'#fff',cursor:'pointer',fontWeight:700,fontSize:14}}>
                  {g.icon} {g.title}
                </button>
              ))}
            </div>
            {(() => {
              const game = MINI_GAMES[gameIdx];
              const q = game.questions[gameQIdx];
              if (gameFinished) return (
                <div style={{background:'#fff',borderRadius:16,padding:30,textAlign:'center',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize:50,marginBottom:10}}>{gameScore>=4?'🏆':gameScore>=2?'👍':'📖'}</div>
                  <h3 style={{margin:'0 0 8px',fontSize:22}}>Score: {gameScore}/{game.questions.length}</h3>
                  <p style={{color:'#666',fontSize:14,margin:'0 0 20px'}}>{gameScore>=4?'Amazing! You crushed it!':gameScore>=2?'Good job!':'Keep practicing!'}</p>
                  <button onClick={()=>{setGameQIdx(0);setGameInput('');setGameResult(null);setGameScore(0);setGameFinished(false);}}
                    style={{background:'#4F8EF7',color:'#fff',border:'none',borderRadius:10,padding:'11px 24px',fontWeight:700,fontSize:14,cursor:'pointer'}}>🔄 Play Again</button>
                </div>
              );
              return (
                <div style={{background:'#fff',borderRadius:16,padding:24,boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
                    <span style={{fontWeight:700,fontSize:14,color:'#4F8EF7'}}>Question {gameQIdx+1}/{game.questions.length}</span>
                    <span style={{fontWeight:700,fontSize:14}}>Score: {gameScore} 🌟</span>
                  </div>
                  <div style={{background:'#1e1e2e',borderRadius:10,padding:'14px 18px',marginBottom:16}}>
                    <pre style={{color:'#cdd6f4',margin:0,fontSize:14,fontFamily:'monospace'}}>{gameIdx===0?q.code:q.broken}</pre>
                  </div>
                  <p style={{fontSize:14,color:'#555',marginBottom:12}}>{gameIdx===0?`What goes in the blank ___?`:`What's wrong? Type the fixed version:`}</p>
                  {!gameResult && <>
                    <input value={gameInput} onChange={e=>setGameInput(e.target.value)}
                      onKeyDown={e=>{if(e.key==='Enter'){
                        const correct = gameInput.trim()===(gameIdx===0?q.blank:q.fixed);
                        setGameResult(correct);
                        if(correct){setGameScore(s=>s+1);awardBadge('gamer');}
                      }}}
                      placeholder="Type your answer and press Enter..."
                      style={{width:'100%',padding:'11px 14px',borderRadius:10,border:'2px solid #dde',fontSize:14,fontFamily:gameIdx===1?'monospace':'inherit',outline:'none',boxSizing:'border-box'}} />
                    <p style={{fontSize:12,color:'#aaa',marginTop:6}}>💡 Hint: {gameIdx===0?q.hint:q.hint}</p>
                  </>}
                  {gameResult!==null && (
                    <div style={{padding:14,borderRadius:10,background:gameResult?'#f0fff8':'#fff0f0',border:`2px solid ${gameResult?'#4FC78A':'#F74F4F'}`,marginBottom:14}}>
                      <p style={{margin:0,fontWeight:700,color:gameResult?'#1a7a4a':'#c0392b'}}>{gameResult?'✅ Correct! Great job!':'❌ Not quite!'}</p>
                      {!gameResult && <p style={{margin:'6px 0 0',fontSize:13,color:'#555'}}>Answer: <code style={{background:'#f0f4ff',padding:'1px 6px',borderRadius:4}}>{gameIdx===0?q.blank:q.fixed}</code></p>}
                    </div>
                  )}
                  {gameResult!==null && (
                    <button onClick={()=>{
                      if(gameQIdx<game.questions.length-1){setGameQIdx(i=>i+1);setGameInput('');setGameResult(null);}
                      else setGameFinished(true);
                    }} style={{background:'#4F8EF7',color:'#fff',border:'none',borderRadius:10,padding:'11px 24px',fontWeight:700,fontSize:14,cursor:'pointer',width:'100%'}}>
                      {gameQIdx<game.questions.length-1?'Next Question →':'See Results 🏆'}
                    </button>
                  )}
                </div>
              );
            })()}
          </div>
  );
}
