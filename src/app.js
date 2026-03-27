import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const BADGES = [
  { id:"first_step", icon:"🐣", label:"First Step", desc:"Complete your first chapter" },
  { id:"quiz_master", icon:"🧠", label:"Quiz Master", desc:"Score 100% on any quiz" },
  { id:"on_fire", icon:"🔥", label:"On Fire", desc:"Complete 3 chapters in a row" },
  { id:"half_way", icon:"⭐", label:"Half Way", desc:"Complete 4 chapters" },
  { id:"python_pro", icon:"🏆", label:"Python Pro", desc:"Complete all chapters" },
  { id:"challenger", icon:"🎯", label:"Challenger", desc:"Complete a daily challenge" },
  { id:"gamer", icon:"🎮", label:"Gamer", desc:"Win a mini-game" },
  { id:"streak_3", icon:"📅", label:"3-Day Streak", desc:"Study 3 days in a row" },
];

const VIDEOS = {
  1: { title:"Python in 100 Seconds", url:"https://www.youtube.com/watch?v=x7X9w_GIm1s" },
  2: { title:"Variables & Data Types", url:"https://www.youtube.com/watch?v=Z1Yd7upQsXY" },
  3: { title:"Python Math & Operators", url:"https://www.youtube.com/watch?v=v5MR5JnKcZI" },
  4: { title:"If Statements Explained", url:"https://www.youtube.com/watch?v=AWek49wXGzI" },
  5: { title:"Python Loops", url:"https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
  6: { title:"Lists & Dictionaries", url:"https://www.youtube.com/watch?v=W8KRzm-HUcc" },
  7: { title:"Python Functions", url:"https://www.youtube.com/watch?v=9Os0o3wzS_I" },
  8: { title:"Error Handling", url:"https://www.youtube.com/watch?v=NIWwJbo-9_8" },
};

const DAILY_CHALLENGES = [
  { id:1, title:"FizzBuzz", difficulty:"Beginner", xp:50, desc:"Print numbers 1-20. For multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'FizzBuzz'.", starter:"for i in range(1, 21):\n    # your code here\n    pass", hint:"Use the % (modulus) operator to check divisibility" },
  { id:2, title:"Reverse a String", difficulty:"Beginner", xp:30, desc:"Write a function that reverses a string. E.g. 'hello' → 'olleh'", starter:"def reverse_string(s):\n    # your code here\n    pass\n\nprint(reverse_string('hello'))", hint:"Try using slicing: s[::-1]" },
  { id:3, title:"Count Vowels", difficulty:"Intermediate", xp:60, desc:"Write a function that counts how many vowels are in a string.", starter:"def count_vowels(s):\n    vowels = 'aeiouAEIOU'\n    # your code here\n    pass\n\nprint(count_vowels('Hello World'))", hint:"Loop through each character and check if it's in the vowels string" },
  { id:4, title:"Palindrome Checker", difficulty:"Intermediate", xp:70, desc:"Check if a word is the same forwards and backwards. E.g. 'racecar' is a palindrome.", starter:"def is_palindrome(word):\n    # your code here\n    pass\n\nprint(is_palindrome('racecar'))\nprint(is_palindrome('hello'))", hint:"Compare the string to its reverse" },
  { id:5, title:"Simple Calculator", difficulty:"Advanced", xp:100, desc:"Build a calculator function that takes two numbers and an operator (+,-,*,/) and returns the result.", starter:"def calculator(a, operator, b):\n    # your code here\n    pass\n\nprint(calculator(10, '+', 5))\nprint(calculator(10, '/', 2))", hint:"Use if/elif for each operator, handle division by zero!" },
];

const MINI_GAMES = [
  {
    id:1, title:"Fill the Blank", icon:"✏️", desc:"Complete the missing code!",
    questions:[
      { code:"___(\"Hello World\")", blank:"print", hint:"Display text on screen" },
      { code:"name ___ \"Alice\"", blank:"=", hint:"Assign a value" },
      { code:"for i in ___(5):", blank:"range", hint:"Generate a sequence" },
      { code:"___ x > 10:", blank:"if", hint:"Conditional statement" },
      { code:"fruits.___(\"mango\")", blank:"append", hint:"Add to a list" },
    ]
  },
  {
    id:2, title:"Fix the Bug 🐛", icon:"🐛", desc:"Find and fix the broken code!",
    questions:[
      { broken:"primt('Hello')", fixed:"print('Hello')", hint:"Check the function name spelling" },
      { broken:"for i in range(5)\n    print(i)", fixed:"for i in range(5):\n    print(i)", hint:"Missing colon at end of for loop" },
      { broken:"if x = 5:", fixed:"if x == 5:", hint:"Use == for comparison, not =" },
      { broken:"def greet()\n    print('Hi')", fixed:"def greet():\n    print('Hi')", hint:"Missing colon after function definition" },
      { broken:"my list = [1,2,3]", fixed:"my_list = [1,2,3]", hint:"Variable names can't have spaces" },
    ]
  },
];

const PROJECTS = [
  { id:1, chapter:2, title:"Name Card Generator", icon:"🪪", difficulty:"Beginner", xp:80,
    desc:"Build a program that takes a name, age and city and prints a formatted name card.",
    starter:"name = 'Your Name'\nage = 20\ncity = 'Your City'\n\n# Print a name card like:\n# ==================\n# Name: Your Name\n# Age: 20\n# City: Your City\n# ==================",
    solution:"name = 'Alice'\nage = 20\ncity = 'New York'\nprint('==================')\nprint(f'Name: {name}')\nprint(f'Age: {age}')\nprint(f'City: {city}')\nprint('==================')" },
  { id:2, chapter:5, title:"Times Table Printer", icon:"✖️", difficulty:"Beginner", xp:80,
    desc:"Use a loop to print the times table for any number.",
    starter:"number = 7\n# Print: 7 x 1 = 7, 7 x 2 = 14 ... up to 7 x 10 = 70",
    solution:"number = 7\nfor i in range(1, 11):\n    print(f'{number} x {i} = {number * i}')" },
  { id:3, chapter:7, title:"Simple Calculator", icon:"🧮", difficulty:"Intermediate", xp:120,
    desc:"Build a calculator using functions that can add, subtract, multiply and divide.",
    starter:"def add(a, b):\n    pass\n\ndef subtract(a, b):\n    pass\n\ndef multiply(a, b):\n    pass\n\ndef divide(a, b):\n    pass\n\nprint(add(10, 5))\nprint(divide(10, 2))",
    solution:"def add(a,b): return a+b\ndef subtract(a,b): return a-b\ndef multiply(a,b): return a*b\ndef divide(a,b): return a/b if b!=0 else 'Error: divide by zero'\nprint(add(10,5))\nprint(divide(10,2))" },
  { id:4, chapter:6, title:"Student Grade Book", icon:"📓", difficulty:"Intermediate", xp:120,
    desc:"Use a dictionary to store student names and grades, then find the highest score.",
    starter:"grades = {\n    'Alice': 92,\n    'Bob': 78,\n    'Charlie': 85\n}\n# Print each student's grade\n# Print who has the highest score",
    solution:"grades = {'Alice':92,'Bob':78,'Charlie':85}\nfor name,score in grades.items():\n    print(f'{name}: {score}')\nbest = max(grades, key=grades.get)\nprint(f'Top student: {best} with {grades[best]}')" },
];

const CHEATSHEET = [
  { cat:"📦 Variables", items:[
    { code:'name = "Alice"', desc:"String variable" },
    { code:"age = 25", desc:"Integer variable" },
    { code:"pi = 3.14", desc:"Float variable" },
    { code:"is_cool = True", desc:"Boolean variable" },
    { code:'type(x)', desc:"Check data type" },
  ]},
  { cat:"🧮 Operators", items:[
    { code:"+ - * /", desc:"Basic math" },
    { code:"//", desc:"Floor division" },
    { code:"%", desc:"Remainder (modulus)" },
    { code:"**", desc:"Power (2**8 = 256)" },
    { code:"== != > < >= <=", desc:"Comparison" },
    { code:"and or not", desc:"Logical operators" },
  ]},
  { cat:"❓ Conditions", items:[
    { code:"if x > 0:", desc:"If condition" },
    { code:"elif x == 0:", desc:"Else if" },
    { code:"else:", desc:"Otherwise" },
  ]},
  { cat:"🔁 Loops", items:[
    { code:"for i in range(5):", desc:"Repeat 5 times" },
    { code:"for item in list:", desc:"Loop through list" },
    { code:"while x < 10:", desc:"While loop" },
    { code:"break", desc:"Exit loop" },
    { code:"continue", desc:"Skip iteration" },
  ]},
  { cat:"📋 Lists", items:[
    { code:'lst = [1,2,3]', desc:"Create list" },
    { code:"lst[0]", desc:"First item (index 0)" },
    { code:"lst[-1]", desc:"Last item" },
    { code:"lst.append(x)", desc:"Add item" },
    { code:"lst.remove(x)", desc:"Remove item" },
    { code:"len(lst)", desc:"Count items" },
    { code:"lst[1:3]", desc:"Slice list" },
  ]},
  { cat:"📖 Dictionary", items:[
    { code:'d = {"key": "val"}', desc:"Create dict" },
    { code:'d["key"]', desc:"Get value" },
    { code:'d["key"] = "new"', desc:"Set value" },
    { code:"d.keys()", desc:"All keys" },
    { code:"d.values()", desc:"All values" },
    { code:"d.items()", desc:"Key-value pairs" },
  ]},
  { cat:"⚙️ Functions", items:[
    { code:"def name():", desc:"Define function" },
    { code:"def name(a, b):", desc:"With parameters" },
    { code:"return value", desc:"Return a value" },
    { code:'def name(x=0):', desc:"Default parameter" },
  ]},
  { cat:"🚨 Errors", items:[
    { code:"try:", desc:"Start safe block" },
    { code:"except ValueError:", desc:"Catch error" },
    { code:"finally:", desc:"Always runs" },
    { code:'raise Exception("msg")', desc:"Throw error" },
  ]},
  { cat:"📝 Strings", items:[
    { code:'f"Hello {name}"', desc:"f-string" },
    { code:'s.upper()', desc:"Uppercase" },
    { code:'s.lower()', desc:"Lowercase" },
    { code:'s.split(",")', desc:"Split string" },
    { code:'s.strip()', desc:"Remove spaces" },
    { code:'len(s)', desc:"String length" },
  ]},
];

const chapters = [
  { id:1, emoji:"👋", title:"What is Python?", color:"#4F8EF7", level:"Beginner",
    content:`Python is a **programming language** — think of it like giving instructions to a computer in a language it understands.\n\n🐍 Python was created by **Guido van Rossum** in 1991. It's named after the comedy show "Monty Python's Flying Circus" — not the snake!\n\n**Why Python?**\n- 🟢 Super easy to read and write (looks like English!)\n- 🟢 Used by Google, NASA, Netflix, Instagram\n- 🟢 Great for websites, games, AI, data, and more!\n- 🟢 Free to use!\n\n**Your very first Python program:**\n\`\`\`python\nprint("Hello, World!")\n\`\`\`\nThis tells the computer to display: **Hello, World!**\n\n\`print()\` is a **function** — a built-in command. Whatever you put inside the quotes gets shown on screen.`,
    quiz:[
      { q:"Who created Python?", options:["Bill Gates","Guido van Rossum","Elon Musk","Mark Zuckerberg"], ans:1 },
      { q:'What does print("Hi") do?', options:["Prints on paper","Shows 'Hi' on screen","Deletes Hi","Nothing"], ans:1 },
      { q:"Python is named after a…", options:["Snake","Programming book","Comedy show","University"], ans:2 },
    ]
  },
  { id:2, emoji:"📦", title:"Variables & Data Types", color:"#F7774F", level:"Beginner",
    content:`A **variable** is like a labeled box that stores information.\n\n\`\`\`python\nname = "Alice"\nage = 12\nheight = 1.55\nis_student = True\n\`\`\`\n\n🗂️ **The 4 Main Data Types:**\n\n| Type | Example | What it stores |\n|------|---------|----------------|\n| **String (str)** | "Hello" | Text |\n| **Integer (int)** | 42 | Whole numbers |\n| **Float** | 3.14 | Decimal numbers |\n| **Boolean** | True / False | Yes or No |\n\n**Checking the type:**\n\`\`\`python\nx = 10\nprint(type(x))   # <class 'int'>\n\`\`\`\n\n**Rules for naming variables:**\n- ✅ my_name, age2, total_score\n- ❌ 2name, my-name, class\n\n**Tip:** Use underscores instead of spaces: \`my_name\` not \`my name\``,
    quiz:[
      { q:'What type is: name = "Alice"?', options:["int","float","str","bool"], ans:2 },
      { q:"Which variable name is VALID?", options:["2cool","my-name","my_name","class"], ans:2 },
      { q:"True and False are which data type?", options:["String","Integer","Float","Boolean"], ans:3 },
    ]
  },
  { id:3, emoji:"🧮", title:"Math & Operators", color:"#4FC78A", level:"Beginner",
    content:`Python can be used like a calculator!\n\n\`\`\`python\nprint(5 + 3)    # 8\nprint(10 - 4)   # 6\nprint(3 * 4)    # 12\nprint(15 / 4)   # 3.75\nprint(15 // 4)  # 3  (floor division)\nprint(15 % 4)   # 3  (remainder)\nprint(2 ** 8)   # 256 (power)\n\`\`\`\n\n**Comparison Operators:**\n\`\`\`python\n5 > 3    # True\n5 == 5   # True\n5 != 3   # True\n5 >= 5   # True\n\`\`\`\n\n**f-strings — mix variables and text:**\n\`\`\`python\nname = "Alice"\nage = 12\nprint(f"My name is {name} and I am {age} years old.")\n\`\`\``,
    quiz:[
      { q:"What does 10 % 3 equal?", options:["3","1","0","3.3"], ans:1 },
      { q:"What does ** mean in Python?", options:["Multiply","Divide","Power/Exponent","Equals"], ans:2 },
      { q:"Which checks if two values are equal?", options:["=","=>","==","!="], ans:2 },
    ]
  },
  { id:4, emoji:"❓", title:"If / Else Decisions", color:"#B44FF7", level:"Beginner",
    content:`Computers make decisions just like you do!\n\n\`\`\`python\nage = 15\nif age >= 18:\n    print("You can vote! 🗳️")\nelse:\n    print("Too young to vote. 😅")\n\`\`\`\n\n**elif — for more choices:**\n\`\`\`python\nscore = 75\nif score >= 90:\n    print("Grade: A 🌟")\nelif score >= 80:\n    print("Grade: B 👍")\nelif score >= 70:\n    print("Grade: C 😊")\nelse:\n    print("Grade: F 😢")\n\`\`\`\n\n⚠️ **Indentation is CRITICAL — always 4 spaces!**\n\n**Logical Operators:**\n- \`and\` — both must be true\n- \`or\` — at least one must be true\n- \`not\` — flips True to False`,
    quiz:[
      { q:"What keyword do you use for 'otherwise'?", options:["elif","else","or","not"], ans:1 },
      { q:"How many spaces for indentation in Python?", options:["2","3","4","8"], ans:2 },
      { q:"What does 'and' require?", options:["One condition true","Both conditions true","No conditions","Either or"], ans:1 },
    ]
  },
  { id:5, emoji:"🔁", title:"Loops", color:"#F7C84F", level:"Intermediate",
    content:`Loops let you repeat code without writing it over and over!\n\n**For Loop:**\n\`\`\`python\nfor i in range(5):\n    print(i)  # 0,1,2,3,4\n\`\`\`\n\n**range(start, stop, step):**\n\`\`\`python\nfor i in range(1, 10, 2):\n    print(i)  # 1,3,5,7,9\n\`\`\`\n\n**While Loop:**\n\`\`\`python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\`\`\`\n\n**break and continue:**\n\`\`\`python\nfor i in range(10):\n    if i == 5: break    # stop\n    if i == 2: continue # skip\n    print(i)\n\`\`\``,
    quiz:[
      { q:"What does range(3) produce?", options:["1,2,3","0,1,2","0,1,2,3","1,2"], ans:1 },
      { q:"Which loop runs WHILE a condition is true?", options:["for loop","while loop","if loop","range loop"], ans:1 },
      { q:"What does 'break' do in a loop?", options:["Continues to next","Stops the loop","Restarts the loop","Nothing"], ans:1 },
    ]
  },
  { id:6, emoji:"📋", title:"Lists & Collections", color:"#4FF7E8", level:"Intermediate",
    content:`A **list** stores multiple items in one variable!\n\n\`\`\`python\nfruits = ["apple", "banana", "cherry"]\n\`\`\`\n\n**Accessing items (index starts at 0!):**\n\`\`\`python\nprint(fruits[0])   # apple\nprint(fruits[-1])  # cherry (last!)\n\`\`\`\n\n**Common Methods:**\n\`\`\`python\nfruits.append("mango")\nfruits.remove("banana")\nfruits.sort()\nlen(fruits)\n\`\`\`\n\n**Dictionaries — key-value pairs:**\n\`\`\`python\nperson = {\n    "name": "Alice",\n    "age": 12\n}\nprint(person["name"])  # Alice\n\`\`\``,
    quiz:[
      { q:"What index is the FIRST item in a list?", options:["1","-1","0","first"], ans:2 },
      { q:"Which method adds an item to a list?", options:["add()","insert()","append()","push()"], ans:2 },
      { q:"What stores key-value pairs in Python?", options:["List","Tuple","Set","Dictionary"], ans:3 },
    ]
  },
  { id:7, emoji:"⚙️", title:"Functions", color:"#F74F4F", level:"Intermediate",
    content:`A **function** is a reusable block of code!\n\n\`\`\`python\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Alice")\ngreet("Bob")\n\`\`\`\n\n**Return values:**\n\`\`\`python\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # 8\n\`\`\`\n\n**Default parameters:**\n\`\`\`python\ndef greet(name="stranger"):\n    print(f"Hello, {name}!")\n\ngreet()        # Hello, stranger!\ngreet("Alice") # Hello, Alice!\n\`\`\``,
    quiz:[
      { q:"What keyword defines a function?", options:["func","define","def","function"], ans:2 },
      { q:"What does 'return' do in a function?", options:["Stops the program","Sends a value back","Prints output","Loops"], ans:1 },
      { q:"Can a function have default parameter values?", options:["No","Yes","Only in Python 3","Only numbers"], ans:1 },
    ]
  },
  { id:8, emoji:"🚨", title:"Error Handling", color:"#F79A4F", level:"Advanced",
    content:`Errors happen! Handle them safely!\n\n\`\`\`python\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Can't divide by zero!")\nfinally:\n    print("This always runs!")\n\`\`\`\n\n**Common Error Types:**\n\n| Error | Cause |\n|-------|-------|\n| SyntaxError | Bad code structure |\n| NameError | Variable not defined |\n| TypeError | Wrong data type |\n| IndexError | List index too big |\n| ValueError | Wrong value given |\n| ZeroDivisionError | Divide by zero |`,
    quiz:[
      { q:"What keyword starts error handling?", options:["catch","try","error","safe"], ans:1 },
      { q:"What error happens with 10 / 0?", options:["ValueError","SyntaxError","ZeroDivisionError","TypeError"], ans:2 },
      { q:"When does 'finally' block run?", options:["Only on error","Only on success","Always","Never"], ans:2 },
    ]
  },
];

// ─── MINI PYTHON INTERPRETER (Skulpt-like subset via eval tricks) ─────────────
function runPython(code) {
  // We'll use a simple simulation — map common Python to JS output
  const lines = [];
  try {
    const prints = [];
    const fakeCode = code
      .replace(/print\((.*?)\)/g, (_, arg) => `prints.push(String(${arg.replace(/f"(.*?)"/g, (_,s) => '`'+s.replace(/\{(\w+)\}/g,'${$1}')+'`')}))`)
      .replace(/True/g,'true').replace(/False/g,'false').replace(/None/g,'null')
      .replace(/#.*/g,'');
    // eslint-disable-next-line no-new-func
    new Function('prints', fakeCode)(prints);
    return { output: prints.join('\n') || '(no output)', error: null };
  } catch(e) {
    return { output: '', error: e.message };
  }
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CodeEditor({ starter = '', onRun, label = "Run Code ▶" }) {
  const [code, setCode] = useState(starter);
  const [result, setResult] = useState(null);
  const ta = useRef();

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = ta.current.selectionStart, en = ta.current.selectionEnd;
      const v = code.substring(0,s) + '    ' + code.substring(en);
      setCode(v);
      setTimeout(() => { ta.current.selectionStart = ta.current.selectionEnd = s+4; }, 0);
    }
  };

  const run = () => {
    const r = onRun ? onRun(code) : runPython(code);
    setResult(r);
  };

  return (
    <div style={{borderRadius:12,overflow:'hidden',border:'2px solid #2d2d3f',marginTop:12}}>
      <div style={{background:'#1a1a2e',padding:'6px 14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{color:'#888',fontSize:12}}>🐍 Python Editor</span>
        <button onClick={run} style={{background:'#4FC78A',color:'#fff',border:'none',borderRadius:6,padding:'4px 14px',fontWeight:700,fontSize:13,cursor:'pointer'}}>{label}</button>
      </div>
      <textarea ref={ta} value={code} onChange={e=>setCode(e.target.value)} onKeyDown={handleTab}
        spellCheck={false}
        style={{width:'100%',minHeight:120,background:'#1e1e2e',color:'#cdd6f4',border:'none',padding:'12px 16px',fontFamily:'monospace',fontSize:13,lineHeight:1.6,resize:'vertical',outline:'none',display:'block'}} />
      {result && (
        <div style={{background: result.error?'#2d1a1a':'#1a2d1a',padding:'10px 16px',borderTop:'1px solid #333'}}>
          <div style={{color:'#888',fontSize:11,marginBottom:4}}>Output:</div>
          <pre style={{color: result.error?'#f87171':'#86efac',margin:0,fontSize:13,whiteSpace:'pre-wrap'}}>{result.error || result.output}</pre>
        </div>
      )}
    </div>
  );
}

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

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState('home'); // home|chapter|quiz|dashboard|challenges|games|projects|cheatsheet
  const [currentChapter, setCurrentChapter] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [xp, setXP] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [quizScores, setQuizScores] = useState({});
  const [gameIdx, setGameIdx] = useState(0);
  const [gameQIdx, setGameQIdx] = useState(0);
  const [gameInput, setGameInput] = useState('');
  const [gameResult, setGameResult] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [challengeDone, setChallengeDone] = useState([]);
  const [toast, setToast] = useState(null);
  const [levelFilter, setLevelFilter] = useState('All');
  const [showHint, setShowHint] = useState(false);

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

  const selectChapter = (ch) => {
    setCurrentChapter(ch);
    setQuizMode(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setTab('chapter');
    setShowHint(false);
  };

  const submitQuiz = () => {
    const score = currentChapter.quiz.filter((q,i)=>quizAnswers[i]===q.ans).length;
    setQuizSubmitted(true);
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

  const score = currentChapter && quizSubmitted
    ? currentChapter.quiz.filter((q,i)=>quizAnswers[i]===q.ans).length : 0;

  const renderContent = (text) => {
    const lines = text.trim().split('\n');
    const result=[], codeLines=[]; let inCode=false, inTable=false, tableRows=[];
    const flushTable = () => {
      if (tableRows.length>1) {
        const headers = tableRows[0].split('|').filter(Boolean).map(h=>h.trim());
        const rows = tableRows.slice(2).map(r=>r.split('|').filter(Boolean).map(c=>c.trim()));
        result.push(<div key={result.length} style={{overflowX:'auto',margin:'12px 0'}}>
          <table style={{borderCollapse:'collapse',width:'100%',fontSize:14}}>
            <thead><tr>{headers.map((h,i)=><th key={i} style={{background:'#f0f4ff',padding:'8px 12px',border:'1px solid #ddd',textAlign:'left'}}>{h}</th>)}</tr></thead>
            <tbody>{rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j} style={{padding:'8px 12px',border:'1px solid #ddd'}} dangerouslySetInnerHTML={{__html:cell.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}} />)}</tr>)}</tbody>
          </table></div>);
      }
      tableRows.length=0; inTable=false;
    };
    lines.forEach((line,idx)=>{
      if (line.startsWith('```')) {
        if (inCode) { result.push(<pre key={result.length} style={{background:'#1e1e2e',color:'#cdd6f4',padding:16,borderRadius:10,overflowX:'auto',fontSize:13,lineHeight:1.6,margin:'12px 0'}}><code>{codeLines.join('\n')}</code></pre>); codeLines.length=0; inCode=false; } else inCode=true; return;
      }
      if (inCode) { codeLines.push(line); return; }
      if (line.startsWith('|')) { inTable=true; tableRows.push(line); return; } else if (inTable) flushTable();
      const html = line.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code style="background:#f0f4ff;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:13px">$1</code>');
      if (line.startsWith('- ')) result.push(<li key={result.length} style={{margin:'4px 0 4px 20px',fontSize:14}} dangerouslySetInnerHTML={{__html:html.slice(2)}} />);
      else if (line.trim()==='') result.push(<br key={result.length}/>);
      else result.push(<p key={result.length} style={{margin:'6px 0',fontSize:14,lineHeight:1.7}} dangerouslySetInnerHTML={{__html:html}} />);
    });
    if (inTable) flushTable();
    return result;
  };

  const TABS = [
    {id:'home',icon:'🏠',label:'Chapters'},
    {id:'dashboard',icon:'📊',label:'Dashboard'},
    {id:'challenges',icon:'🎯',label:'Challenges'},
    {id:'games',icon:'🎮',label:'Games'},
    {id:'projects',icon:'💡',label:'Projects'},
    {id:'cheatsheet',icon:'📝',label:'Cheat Sheet'},
  ];

  const filteredChapters = levelFilter==='All' ? chapters : chapters.filter(c=>c.level===levelFilter);

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
                  {quizScores[ch.id]!==undefined && <div style={{fontSize:11,color:'#888',marginTop:4}}>Quiz: {quizScores[ch.id]}/3</div>}
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── CHAPTER VIEW ── */}
        {tab==='chapter' && currentChapter && !quizMode && (
          <div>
            <button onClick={()=>{setCurrentChapter(null);setTab('home');}} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:14,fontWeight:600,marginBottom:12,padding:0}}>← Back</button>
            <div style={{background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
              <div style={{background:`linear-gradient(135deg,${currentChapter.color},${currentChapter.color}99)`,padding:'20px 24px',color:'#fff'}}>
                <div style={{fontSize:32,marginBottom:4}}>{currentChapter.emoji}</div>
                <div style={{fontSize:11,fontWeight:700,opacity:.8}}>CHAPTER {currentChapter.id} • {currentChapter.level}</div>
                <h2 style={{margin:'4px 0 0',fontSize:20,fontWeight:800}}>{currentChapter.title}</h2>
              </div>
              <div style={{padding:24}}>
                {renderContent(currentChapter.content)}
                {/* Video Link */}
                {VIDEOS[currentChapter.id] && (
                  <div style={{marginTop:16,padding:14,background:'#fff4f0',borderRadius:10,display:'flex',alignItems:'center',gap:12}}>
                    <span style={{fontSize:24}}>📹</span>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:'#F7774F'}}>RECOMMENDED VIDEO</div>
                      <a href={VIDEOS[currentChapter.id].url} target="_blank" rel="noreferrer" style={{color:'#4F8EF7',fontWeight:600,fontSize:14}}>{VIDEOS[currentChapter.id].title} →</a>
                    </div>
                  </div>
                )}
                {/* Live Code Editor */}
                <div style={{marginTop:20}}>
                  <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>🖥️ Try It Yourself!</div>
                  <CodeEditor starter={`# Try some ${currentChapter.title} code here!\nprint("Hello from Chapter ${currentChapter.id}!")`} />
                </div>
              </div>
              <div style={{padding:'0 24px 24px',display:'flex',gap:10,flexWrap:'wrap'}}>
                <button onClick={()=>setQuizMode(true)} style={{background:currentChapter.color,color:'#fff',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>🧪 Take Quiz</button>
                <button onClick={()=>{setCurrentChapter(null);setTab('home');}} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:10,padding:'11px 22px',fontWeight:700,fontSize:14,cursor:'pointer'}}>← Chapters</button>
              </div>
            </div>
          </div>
        )}

        {/* ── QUIZ ── */}
        {tab==='chapter' && currentChapter && quizMode && (
          <div>
            <button onClick={()=>setQuizMode(false)} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:14,fontWeight:600,marginBottom:12,padding:0}}>← Back to Chapter</button>
            <div style={{background:'#fff',borderRadius:16,overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
              <div style={{background:`linear-gradient(135deg,${currentChapter.color},${currentChapter.color}99)`,padding:'16px 24px',color:'#fff'}}>
                <div style={{fontSize:20,marginBottom:2}}>🧪 Quiz Time!</div>
                <h2 style={{margin:0,fontSize:17,fontWeight:800}}>Chapter {currentChapter.id}: {currentChapter.title}</h2>
              </div>
              <div style={{padding:24}}>
                {currentChapter.quiz.map((q,qi)=>{
                  const correct = quizAnswers[qi]===q.ans;
                  return (
                    <div key={qi} style={{marginBottom:20,padding:16,borderRadius:12,border:`2px solid ${quizSubmitted?(correct?'#4FC78A':'#F74F4F'):'#eef0ff'}`,background:quizSubmitted?(correct?'#f0fff8':'#fff4f4'):'#fafbff'}}>
                      <p style={{fontWeight:700,fontSize:15,margin:'0 0 10px'}}>Q{qi+1}: {q.q}</p>
                      <div style={{display:'flex',flexDirection:'column',gap:8}}>
                        {q.options.map((opt,oi)=>{
                          let bg='#f4f6ff',border='1px solid #dde',color='#333';
                          if (quizAnswers[qi]===oi){bg=`${currentChapter.color}22`;border=`2px solid ${currentChapter.color}`;color=currentChapter.color;}
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
                      {quizSubmitted&&<p style={{margin:'8px 0 0',fontSize:13,color:correct?'#1a7a4a':'#c0392b',fontWeight:600}}>{correct?'🎉 Correct!':`💡 Answer: "${q.options[q.ans]}"`}</p>}
                    </div>
                  );
                })}
                {!quizSubmitted ? (
                  <button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length<currentChapter.quiz.length}
                    style={{background:Object.keys(quizAnswers).length<currentChapter.quiz.length?'#ccc':currentChapter.color,color:'#fff',border:'none',borderRadius:10,padding:'13px 28px',fontWeight:700,fontSize:15,cursor:Object.keys(quizAnswers).length<currentChapter.quiz.length?'not-allowed':'pointer',width:'100%'}}>
                    {Object.keys(quizAnswers).length<currentChapter.quiz.length?`Answer all (${Object.keys(quizAnswers).length}/3)`:'Submit Quiz 🚀'}
                  </button>
                ) : (
                  <div style={{textAlign:'center',padding:20,background:'#f8f9ff',borderRadius:12}}>
                    <div style={{fontSize:40,marginBottom:8}}>{score===3?'🏆':score>=2?'👍':'📖'}</div>
                    <p style={{fontWeight:800,fontSize:20,margin:'0 0 4px'}}>Score: {score}/3</p>
                    <p style={{color:'#666',fontSize:14,margin:'0 0 16px'}}>{score===3?'Perfect! 🎉':score>=2?'Great job!':'Review & retry!'}</p>
                    <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
                      <button onClick={()=>{setQuizAnswers({});setQuizSubmitted(false);}} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:10,padding:'9px 18px',fontWeight:700,fontSize:13,cursor:'pointer'}}>🔄 Retry</button>
                      <button onClick={()=>{setCurrentChapter(null);setTab('home');}} style={{background:currentChapter.color,color:'#fff',border:'none',borderRadius:10,padding:'9px 18px',fontWeight:700,fontSize:13,cursor:'pointer'}}>📚 Next Chapter</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── DASHBOARD ── */}
        {tab==='dashboard' && (
          <div>
            <h2 style={{fontWeight:800,fontSize:20,margin:'0 0 16px'}}>📊 Your Dashboard</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:12,marginBottom:20}}>
              {[
                {label:'XP Earned',val:xp,icon:'⚡',color:'#F7C84F'},
                {label:'Chapters Done',val:`${completedChapters.length}/8`,icon:'📚',color:'#4F8EF7'},
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
                    <span style={{fontSize:12,color:'#888',minWidth:60,textAlign:'right'}}>{done?(qs!==undefined?`Quiz: ${qs}/3`:'✅ Done'):'Not started'}</span>
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
          </div>
        )}

        {/* ── CHALLENGES ── */}
        {tab==='challenges' && (
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
                    <CodeEditor starter={ch.starter} label={done?"Run Again ▶":"Submit ▶"} onRun={(code)=>{
                      const r = runPython(code);
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
        )}

        {/* ── MINI GAMES ── */}
        {tab==='games' && (
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
        )}

        {/* ── PROJECTS ── */}
        {tab==='projects' && (
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
        )}

        {/* ── CHEAT SHEET ── */}
        {tab==='cheatsheet' && (
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
        )}

      </div>

      {/* Bottom Nav Mobile */}
      <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#fff',borderTop:'1px solid #eee',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:100}}>
        {TABS.map(t=>(
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
