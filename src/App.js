import { useState, useEffect } from "react";
import { loadProgress, saveProgress } from "./persistence";
import { BADGES, chapters } from "./data";
import XPBar from "./XPBar";
import ChapterView from "./ChapterView";
import Quiz from "./Quiz";
import Dashboard from "./Dashboard";
import Challenges from "./Challenges";
import MiniGames from "./MiniGames";
import Projects from "./Projects";
import CheatSheet from "./CheatSheet";
import SetupGuide from "./SetupGuide";
import TypingGame from "./TypingGame";

// ─── TABS ────────────────────────────────────────────────────────────────────

const TABS = [
  {id:'home',icon:'🏠',label:'Chapters'},
  {id:'dashboard',icon:'📊',label:'Dashboard'},
  {id:'challenges',icon:'🎯',label:'Challenges'},
  {id:'games',icon:'🎮',label:'Games'},
  {id:'projects',icon:'💡',label:'Projects'},
  {id:'cheatsheet',icon:'📝',label:'Cheat Sheet'},
  {id:'setup',icon:'💻',label:'Setup Guide'},
  {id:'typing',icon:'⌨️',label:'Typing'},
];

const BOTTOM_TABS = [
  {id:'home',icon:'🏠',label:'Chapters'},
  {id:'dashboard',icon:'📊',label:'Dashboard'},
  {id:'challenges',icon:'🎯',label:'Challenges'},
  {id:'cheatsheet',icon:'📝',label:'Cheat Sheet'},
];

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState('home');
  const [currentChapter, setCurrentChapter] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [completedChapters, setCompletedChapters] = useState(() => loadProgress('completedChapters', []));
  const [xp, setXP] = useState(() => loadProgress('xp', 0));
  const [earnedBadges, setEarnedBadges] = useState(() => loadProgress('earnedBadges', []));
  const [quizScores, setQuizScores] = useState(() => loadProgress('quizScores', {}));
  const [challengeDone, setChallengeDone] = useState(() => loadProgress('challengeDone', []));
  const [toast, setToast] = useState(null);
  const [levelFilter, setLevelFilter] = useState('All');
  const [showHint, setShowHint] = useState(false);

  // ─── SAVE PROGRESS ──────────────────────────────────────────────────────────
  useEffect(() => { saveProgress('completedChapters', completedChapters); }, [completedChapters]);
  useEffect(() => { saveProgress('xp', xp); }, [xp]);
  useEffect(() => { saveProgress('earnedBadges', earnedBadges); }, [earnedBadges]);
  useEffect(() => { saveProgress('quizScores', quizScores); }, [quizScores]);
  useEffect(() => { saveProgress('challengeDone', challengeDone); }, [challengeDone]);

  // ─── HELPERS ────────────────────────────────────────────────────────────────
  const showToast = (msg, icon='🎉') => {
    setToast({msg, icon});
    setTimeout(() => setToast(null), 3000);
  };

  const awardXP = (amt, reason) => {
    setXP(prev => prev + amt);
    showToast(`+${amt} XP — ${reason}`, '⚡');
  };

  const awardBadge = (id) => {
    if (!earnedBadges.includes(id)) {
      const b = BADGES.find(b=>b.id===id);
      setEarnedBadges(prev=>[...prev,id]);
      setTimeout(() => showToast(`Badge unlocked: ${b.icon} ${b.label}`, b.icon), 1500);
    }
  };

  const resetProgress = () => {
    if (!window.confirm('Reset all progress? This cannot be undone!')) return;
    setCompletedChapters([]); setXP(0); setEarnedBadges([]); setQuizScores({}); setChallengeDone([]);
    ['completedChapters','xp','earnedBadges','quizScores','challengeDone'].forEach(k => localStorage.removeItem('pysg_' + k));
  };

  const selectChapter = (ch) => {
    setCurrentChapter(ch);
    setQuizMode(false);
    setTab('chapter');
  };

  const goHome = () => {
    setCurrentChapter(null);
    setTab('home');
  };

  const handleQuizSubmit = (score) => {
    setQuizScores(prev=>({...prev,[currentChapter.id]:score}));
    const earned = score * 20;
    awardXP(earned, `Chapter ${currentChapter.id} Quiz`);
    const newCompleted = [...completedChapters];
    if (!newCompleted.includes(currentChapter.id)) newCompleted.push(currentChapter.id);
    setCompletedChapters(newCompleted);
    if (newCompleted.length===1) awardBadge('first_step');
    if (newCompleted.length===4) awardBadge('half_way');
    if (newCompleted.length===chapters.length) awardBadge('python_pro');
    if (score===currentChapter.quiz.length) awardBadge('quiz_master');
    if (newCompleted.length>=3) awardBadge('on_fire');
  };

  const filteredChapters = levelFilter==='All' ? chapters : chapters.filter(c=>c.level===levelFilter);

  // ─── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div style={{fontFamily:"'Segoe UI',system-ui,sans-serif",minHeight:'100vh',background:'#f8f9ff',color:'#1a1a2e',paddingBottom:80}}>
      {/* Toast */}
      {toast && <div style={{position:'fixed',top:20,right:20,background:'#1a1a2e',color:'#fff',padding:'12px 20px',borderRadius:12,zIndex:9999,fontWeight:700,fontSize:14,boxShadow:'0 4px 20px rgba(0,0,0,0.3)',animation:'slideIn .3s ease'}}>{toast.icon} {toast.msg}</div>}

      {/* Header */}
      <div style={{background:'linear-gradient(135deg,#4F8EF7,#B44FF7)',padding:'20px 20px 16px',color:'#fff'}}>
        <div style={{maxWidth:860,margin:'0 auto'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
            <span style={{fontSize:32}}>🐍</span>
            <div>
              <h1 style={{margin:0,fontSize:20,fontWeight:800}}>Python Study Guide</h1>
              <p style={{margin:0,opacity:.8,fontSize:12}}>From Zero to Coder — Easy, Fun & Complete!</p>
            </div>
            <div style={{marginLeft:'auto',display:'flex',gap:8,flexWrap:'wrap',justifyContent:'flex-end'}}>
              <span style={{background:'rgba(255,255,255,0.2)',borderRadius:20,padding:'3px 10px',fontSize:12}}>✅ {completedChapters.length}/{chapters.length}</span>
              <span style={{background:'rgba(255,255,255,0.2)',borderRadius:20,padding:'3px 10px',fontSize:12}}>🏅 {earnedBadges.length} badges</span>
            </div>
          </div>
          <XPBar xp={xp} />
        </div>
      </div>

      {/* Nav */}
      <div style={{background:'#fff',borderBottom:'1px solid #eee',overflowX:'auto'}}>
        <div style={{maxWidth:860,margin:'0 auto',display:'flex'}}>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>{setTab(t.id);setCurrentChapter(null);}}
              style={{padding:'12px 16px',border:'none',background:'none',cursor:'pointer',fontWeight:700,fontSize:13,color:tab===t.id?'#4F8EF7':'#666',borderBottom:tab===t.id?'3px solid #4F8EF7':'3px solid transparent',whiteSpace:'nowrap'}}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:860,margin:'0 auto',padding:'20px 16px'}}>

        {/* ── HOME ── */}
        {tab==='home' && !currentChapter && (
          <>
            <div style={{display:'flex',gap:8,marginBottom:16,flexWrap:'wrap'}}>
              {['All','Beginner','Intermediate','Advanced'].map(l=>(
                <button key={l} onClick={()=>setLevelFilter(l)}
                  style={{padding:'6px 14px',borderRadius:20,border:'none',cursor:'pointer',fontWeight:700,fontSize:12,background:levelFilter===l?'#4F8EF7':'#eef0ff',color:levelFilter===l?'#fff':'#4F8EF7'}}>
                  {l==='Beginner'?'🟢':l==='Intermediate'?'🟡':l==='Advanced'?'🔴':'📚'} {l}
                </button>
              ))}
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:12}}>
              {filteredChapters.map(ch=>(
                <div key={ch.id} onClick={()=>selectChapter(ch)}
                  style={{background:'#fff',borderRadius:14,padding:'18px 14px',cursor:'pointer',boxShadow:'0 2px 12px rgba(0,0,0,0.08)',borderLeft:`5px solid ${ch.color}`,transition:'transform .15s',position:'relative'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                  {completedChapters.includes(ch.id) && <span style={{position:'absolute',top:10,right:10,fontSize:14}}>✅</span>}
                  <div style={{fontSize:26,marginBottom:6}}>{ch.emoji}</div>
                  <div style={{fontSize:10,fontWeight:700,color:ch.color,marginBottom:2}}>CH.{ch.id} • {ch.level}</div>
                  <div style={{fontSize:13,fontWeight:700}}>{ch.title}</div>
                  {quizScores[ch.id]!==undefined && <div style={{fontSize:11,color:'#888',marginTop:4}}>Quiz: {quizScores[ch.id]}/{ch.quiz.length}</div>}
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── CHAPTER VIEW ── */}
        {tab==='chapter' && currentChapter && !quizMode && (
          <ChapterView chapter={currentChapter} onBack={goHome} onQuiz={()=>setQuizMode(true)} />
        )}

        {/* ── QUIZ ── */}
        {tab==='chapter' && currentChapter && quizMode && (
          <Quiz chapter={currentChapter} onBack={()=>setQuizMode(false)} onHome={goHome} onSubmit={handleQuizSubmit} />
        )}

        {/* ── DASHBOARD ── */}
        {tab==='dashboard' && (
          <Dashboard xp={xp} completedChapters={completedChapters} earnedBadges={earnedBadges} challengeDone={challengeDone} quizScores={quizScores} resetProgress={resetProgress} />
        )}

        {/* ── CHALLENGES ── */}
        {tab==='challenges' && (
          <Challenges challengeDone={challengeDone} setChallengeDone={setChallengeDone} awardXP={awardXP} awardBadge={awardBadge} showHint={showHint} setShowHint={setShowHint} />
        )}

        {/* ── MINI GAMES ── */}
        {tab==='games' && (
          <MiniGames awardBadge={awardBadge} />
        )}

        {/* ── PROJECTS ── */}
        {tab==='projects' && <Projects />}

        {/* ── CHEAT SHEET ── */}
        {tab==='cheatsheet' && <CheatSheet />}

        {/* ── SETUP GUIDE ── */}
        {tab==='setup' && <SetupGuide />}

        {/* ── TYPING PRACTICE ── */}
        {tab==='typing' && (
          <TypingGame onAwardXP={awardXP} onAwardBadge={awardBadge} />
        )}

      </div>

      {/* Bottom Nav Mobile */}
      <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'1px solid #eee',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:100}}>
        {BOTTOM_TABS.map(t=>(
          <button key={t.id} onClick={()=>{setTab(t.id);setCurrentChapter(null);}}
            style={{border:'none',background:'none',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:'4px 8px',color:tab===t.id?'#4F8EF7':'#aaa'}}>
            <span style={{fontSize:18}}>{t.icon}</span>
            <span style={{fontSize:9,fontWeight:700}}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
