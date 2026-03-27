import React from 'react';

function XPBar({ xp }) {
  const level = Math.floor(xp / 100);
  const labels = ['🐣 Newbie','🌱 Beginner','📚 Student','💻 Coder','⚡ Developer','🚀 Pro','🏆 Python Master'];
  const lbl = labels[Math.min(level, labels.length-1)];
  const pct = (xp % 100);
  return (
    <div style={{background:'rgba(255,255,255,0.15)',borderRadius:12,padding:'10px 16px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
        <span style={{color:'#fff',fontWeight:700,fontSize:13}}>{lbl}</span>
        <span style={{color:'rgba(255,255,255,0.8)',fontSize:12}}>⚡ {xp} XP</span>
      </div>
      <div style={{background:'rgba(0,0,0,0.2)',borderRadius:20,height:8}}>
        <div style={{background:'linear-gradient(90deg,#F7C84F,#F7774F)',borderRadius:20,height:8,width:`${pct}%`,transition:'width .5s'}} />
      </div>
      <div style={{color:'rgba(255,255,255,0.6)',fontSize:11,marginTop:4}}>{pct}/100 XP to next level</div>
    </div>
  );
}

export default XPBar;
