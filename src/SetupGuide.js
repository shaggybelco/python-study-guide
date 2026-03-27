import { SETUP_GUIDE, SETUP_EDITORS, SETUP_FIRST_STEPS } from "./data";
import CodeEditor from "./CodeEditor";

export default function SetupGuide() {
  return (
          <div>
            <div style={{marginBottom:20}}>
              <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 2px'}}>💻 Python Setup Guide</h2>
              <p style={{color:'#888',fontSize:14,margin:0}}>Get Python installed and running on your computer!</p>
            </div>

            {/* Installation by OS */}
            <div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:24}}>
              {SETUP_GUIDE.map(os=>(
                <div key={os.id} style={{background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 2px 12px rgba(0,0,0,0.08)'}}>
                  <div style={{background:os.id==='windows'?'linear-gradient(135deg,#0078D4,#00BCF2)':os.id==='mac'?'linear-gradient(135deg,#333,#666)':'linear-gradient(135deg,#E95420,#F7A84F)',padding:'16px 20px',color:'#fff',display:'flex',alignItems:'center',gap:12}}>
                    <span style={{fontSize:28}}>{os.icon}</span>
                    <h3 style={{margin:0,fontSize:17,fontWeight:800}}>{os.title}</h3>
                  </div>
                  <div style={{padding:20}}>
                    {os.steps.map((step,si)=>(
                      <div key={si} style={{display:'flex',gap:14,marginBottom:si<os.steps.length-1?16:0}}>
                        <div style={{minWidth:32,height:32,borderRadius:'50%',background:'#f0f4ff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:14,color:'#4F8EF7',flexShrink:0}}>{si+1}</div>
                        <div>
                          <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{step.title}</div>
                          <div style={{fontSize:13,color:'#555',lineHeight:1.7}}>
                            {step.detail.split('\n\n').map((part,pi)=>(
                              part.startsWith('python') || part.startsWith('sudo') || part.startsWith('pip')
                                ? <pre key={pi} style={{background:'#1e1e2e',color:'#cdd6f4',padding:'10px 14px',borderRadius:8,fontSize:12,margin:'8px 0',overflowX:'auto',fontFamily:'monospace'}}>{part}</pre>
                                : <p key={pi} style={{margin:pi===0?0:'8px 0 0'}} dangerouslySetInnerHTML={{__html:part.replace(/⚠️/g,'<span style="color:#F7774F">⚠️</span>')}} />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Choose an Editor */}
            <div style={{marginBottom:24}}>
              <h3 style={{fontWeight:800,fontSize:18,margin:'0 0 12px'}}>🖥️ Choose a Code Editor</h3>
              <p style={{color:'#666',fontSize:13,margin:'0 0 14px'}}>A code editor is where you write your Python files. Pick one to get started:</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:12}}>
                {SETUP_EDITORS.map((ed,i)=>(
                  <div key={i} style={{background:'#fff',borderRadius:14,padding:18,boxShadow:'0 2px 12px rgba(0,0,0,0.07)',borderTop:'4px solid #4F8EF7'}}>
                    <div style={{fontSize:28,marginBottom:8}}>{ed.icon}</div>
                    <h4 style={{margin:'0 0 6px',fontSize:15,fontWeight:800}}>{ed.name}</h4>
                    <p style={{fontSize:13,color:'#555',margin:'0 0 10px',lineHeight:1.6}}>{ed.desc}</p>
                    <div style={{background:'#f0fff8',borderRadius:8,padding:'6px 10px',fontSize:11,color:'#1a7a4a',fontWeight:600}}>✅ {ed.best}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* First Steps */}
            <div style={{marginBottom:24}}>
              <h3 style={{fontWeight:800,fontSize:18,margin:'0 0 12px'}}>🚀 Your First Steps with Python</h3>
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                {SETUP_FIRST_STEPS.map((step,i)=>(
                  <div key={i} style={{background:'#fff',borderRadius:14,padding:20,boxShadow:'0 2px 12px rgba(0,0,0,0.07)'}}>
                    <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:10}}>
                      <span style={{fontSize:24}}>{step.icon}</span>
                      <h4 style={{margin:0,fontSize:15,fontWeight:800}}>{step.title}</h4>
                    </div>
                    <p style={{fontSize:13,color:'#555',margin:'0 0 12px',lineHeight:1.7}}>{step.desc}</p>
                    <pre style={{background:'#1e1e2e',color:'#cdd6f4',padding:'14px 18px',borderRadius:10,fontSize:13,margin:0,overflowX:'auto',lineHeight:1.6,fontFamily:'monospace'}}>{step.code}</pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Try it out */}
            <div style={{marginBottom:24}}>
              <h3 style={{fontWeight:800,fontSize:18,margin:'0 0 12px'}}>🎯 Try It Right Here!</h3>
              <p style={{color:'#666',fontSize:13,margin:'0 0 10px'}}>While you set up Python on your PC, you can practice right here in the browser:</p>
              <CodeEditor starter={'# Welcome to Python! Try these:\nprint("Hello, World!")\nprint("My name is ___")  # Put your name!\nprint(2 + 2)\nprint("Python is " + "awesome!")'} />
            </div>

            {/* Common Issues */}
            <div style={{background:'linear-gradient(135deg,#1a1a2e,#2d2d5e)',borderRadius:16,padding:24,color:'#fff'}}>
              <h3 style={{margin:'0 0 14px',fontSize:18}}>🔧 Common Setup Issues & Fixes</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12}}>
                {[
                  {icon:'❌',problem:'"python" is not recognized',fix:'You forgot to check "Add Python to PATH" during installation. Reinstall Python and make sure to check that box!'},
                  {icon:'🔢',problem:'Wrong Python version',fix:'If you have Python 2 and 3, use python3 instead of python. On Windows, try py -3 to force Python 3.'},
                  {icon:'📦',problem:'"pip" is not recognized',fix:'Try python -m pip instead of just pip. On Mac/Linux use pip3. If that fails, reinstall Python with the pip option checked.'},
                  {icon:'🔐',problem:'Permission denied (Mac/Linux)',fix:'Add sudo before the command (e.g., sudo pip3 install requests). You\'ll need to enter your password.'},
                  {icon:'💻',problem:'VS Code can\'t find Python',fix:'Install the Python extension in VS Code (Ctrl+Shift+X, search "Python"). Then select the Python interpreter (Ctrl+Shift+P → "Python: Select Interpreter").'},
                  {icon:'🪟',problem:'Microsoft Store opens instead of Python',fix:'Go to Settings → Apps → App Execution Aliases, and turn off the "python.exe" and "python3.exe" aliases.'},
                ].map((item,i)=>(
                  <div key={i} style={{background:'rgba(255,255,255,0.08)',borderRadius:10,padding:14}}>
                    <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:6}}>
                      <span style={{fontSize:18}}>{item.icon}</span>
                      <div style={{fontSize:13,fontWeight:700,color:'#F7C84F'}}>{item.problem}</div>
                    </div>
                    <p style={{margin:0,fontSize:12,lineHeight:1.6,color:'rgba(255,255,255,0.85)'}}>{item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  );
}
