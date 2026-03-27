import { useState } from "react";

function isQuizAnswerCorrect(q, answer) {
  if (q.type === 'output' || q.type === 'fill') {
    return (answer || '').toString().trim() === String(q.ans).trim();
  }
  return answer === q.ans;
}

export default function Quiz({ chapter, onBack, onHome, onSubmit }) {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const score = quizSubmitted
    ? chapter.quiz.filter((q,i) => isQuizAnswerCorrect(q, quizAnswers[i])).length : 0;
  const total = chapter.quiz.length;

  const handleSubmit = () => {
    const s = chapter.quiz.filter((q,i) => isQuizAnswerCorrect(q, quizAnswers[i])).length;
    setQuizSubmitted(true);
    onSubmit(s);
  };

  const allAnswered = chapter.quiz.every((q,i) => {
    if (q.type === 'output' || q.type === 'fill') return (quizAnswers[i] || '').toString().trim().length > 0;
    return quizAnswers[i] !== undefined;
  });

  return (
    <div>
      <button onClick={onBack} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:14,fontWeight:600,marginBottom:12,padding:0}}>← Back to Chapter</button>
      <div style={{background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
        <div style={{background:`linear-gradient(135deg,${chapter.color},${chapter.color}99)`,padding:'16px 24px',color:'#fff'}}>
          <div style={{fontSize:20,marginBottom:2}}>🧪 Quiz Time!</div>
          <h2 style={{margin:0,fontSize:17,fontWeight:800}}>Chapter {chapter.id}: {chapter.title}</h2>
        </div>
        <div style={{padding:24}}>
          {chapter.quiz.map((q,qi) => {
            const qType = q.type || 'mc';
            const correct = isQuizAnswerCorrect(q, quizAnswers[qi]);
            return (
              <div key={qi} style={{marginBottom:20,padding:16,borderRadius:12,border:`2px solid ${quizSubmitted?(correct?'#4FC78A':'#F74F4F'):'#eef0ff'}`,background:quizSubmitted?(correct?'#f0fff8':'#fff4f4'):'#fafbff'}}>
                <p style={{fontWeight:700,fontSize:15,margin:'0 0 10px'}}>Q{qi+1}: {q.q}</p>
                {/* Multiple choice */}
                {qType==='mc' && (
                  <div style={{display:'flex',flexDirection:'column',gap:8}}>
                    {q.options.map((opt,oi) => {
                      let bg='#f4f6ff',border='1px solid #dde',color='#333';
                      if (quizAnswers[qi]===oi){bg=`${chapter.color}22`;border=`2px solid ${chapter.color}`;color=chapter.color;}
                      if (quizSubmitted&&oi===q.ans){bg='#e8fff4';border='2px solid #4FC78A';color='#1a7a4a';}
                      if (quizSubmitted&&quizAnswers[qi]===oi&&oi!==q.ans){bg='#fff0f0';border='2px solid #F74F4F';color='#c0392b';}
                      return <div key={oi} onClick={()=>!quizSubmitted&&setQuizAnswers(p=>({...p,[qi]:oi}))}
                        style={{padding:'9px 14px',borderRadius:8,cursor:quizSubmitted?'default':'pointer',background:bg,border,color,fontWeight:600,fontSize:14,display:'flex',alignItems:'center',gap:8}}>
                        {quizSubmitted&&oi===q.ans&&<span>✅</span>}
                        {quizSubmitted&&quizAnswers[qi]===oi&&oi!==q.ans&&<span>❌</span>}
                        {opt}
                      </div>;
                    })}
                  </div>
                )}
                {/* Output question */}
                {qType==='output' && (
                  <div>
                    <pre style={{background:'#1e1e2e',color:'#cdd6f4',padding:14,borderRadius:10,fontSize:13,margin:'0 0 12px',overflowX:'auto'}}><code>{q.code}</code></pre>
                    {!quizSubmitted ? (
                      <input value={quizAnswers[qi]||''} onChange={e=>setQuizAnswers(p=>({...p,[qi]:e.target.value}))}
                        placeholder="Type the output..." style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'2px solid #dde',fontSize:14,fontFamily:'monospace',outline:'none',boxSizing:'border-box'}} />
                    ) : (
                      <div style={{padding:10,borderRadius:8,background:correct?'#f0fff8':'#fff0f0',border:`2px solid ${correct?'#4FC78A':'#F74F4F'}`}}>
                        <p style={{margin:0,fontSize:13,fontFamily:'monospace'}}>Your answer: {quizAnswers[qi]}</p>
                      </div>
                    )}
                  </div>
                )}
                {/* Fill-in-the-blank */}
                {qType==='fill' && (
                  <div>
                    <pre style={{background:'#1e1e2e',color:'#cdd6f4',padding:14,borderRadius:10,fontSize:13,margin:'0 0 12px',overflowX:'auto'}}><code>{q.code}</code></pre>
                    {!quizSubmitted ? (
                      <input value={quizAnswers[qi]||''} onChange={e=>setQuizAnswers(p=>({...p,[qi]:e.target.value}))}
                        placeholder="What goes in the blank (___) ?" style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'2px solid #dde',fontSize:14,fontFamily:'monospace',outline:'none',boxSizing:'border-box'}} />
                    ) : (
                      <div style={{padding:10,borderRadius:8,background:correct?'#f0fff8':'#fff0f0',border:`2px solid ${correct?'#4FC78A':'#F74F4F'}`}}>
                        <p style={{margin:0,fontSize:13,fontFamily:'monospace'}}>Your answer: {quizAnswers[qi]}</p>
                      </div>
                    )}
                  </div>
                )}
                {quizSubmitted && qType==='mc' && <p style={{margin:'8px 0 0',fontSize:13,color:correct?'#1a7a4a':'#c0392b',fontWeight:600}}>{correct?'🎉 Correct!':`💡 Answer: "${q.options[q.ans]}"`}</p>}
                {quizSubmitted && qType!=='mc' && <p style={{margin:'8px 0 0',fontSize:13,color:correct?'#1a7a4a':'#c0392b',fontWeight:600}}>{correct?'🎉 Correct!':`💡 Answer: ${q.ans}`}</p>}
              </div>
            );
          })}
          {!quizSubmitted ? (
            <button onClick={handleSubmit} disabled={!allAnswered}
              style={{background:!allAnswered?'#ccc':chapter.color,color:'#fff',border:'none',borderRadius:10,padding:'13px 28px',fontWeight:700,fontSize:15,cursor:!allAnswered?'not-allowed':'pointer',width:'100%'}}>
              {!allAnswered?'Answer all questions':'Submit Quiz 🚀'}
            </button>
          ) : (
            <div style={{textAlign:'center',padding:20,background:'#f8f9ff',borderRadius:12}}>
              <div style={{fontSize:40,marginBottom:8}}>{score===total?'🏆':score>=total-1?'👍':'📖'}</div>
              <p style={{fontWeight:800,fontSize:20,margin:'0 0 4px'}}>Score: {score}/{total}</p>
              <p style={{color:'#666',fontSize:14,margin:'0 0 16px'}}>{score===total?'Perfect! 🎉':score>=total-1?'Great job!':'Review & retry!'}</p>
              <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
                <button onClick={()=>{setQuizAnswers({});setQuizSubmitted(false);}} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:10,padding:'9px 18px',fontWeight:700,fontSize:13,cursor:'pointer'}}>🔄 Retry</button>
                <button onClick={onHome} style={{background:chapter.color,color:'#fff',border:'none',borderRadius:10,padding:'9px 18px',fontWeight:700,fontSize:13,cursor:'pointer'}}>📚 Next Chapter</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
