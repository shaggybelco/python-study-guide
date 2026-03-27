import { useState } from "react";

const chapters = [
  {
    id: 1,
    emoji: "👋",
    title: "What is Python?",
    color: "#4F8EF7",
    content: `
Python is a **programming language** — think of it like giving instructions to a computer in a language it understands.

🐍 Python was created by **Guido van Rossum** in 1991. It's named after the comedy show "Monty Python's Flying Circus" — not the snake!

**Why Python?**
- 🟢 Super easy to read and write (looks like English!)
- 🟢 Used by Google, NASA, Netflix, Instagram
- 🟢 Great for websites, games, AI, data, and more!
- 🟢 Free to use!

**Your very first Python program:**
\`\`\`python
print("Hello, World!")
\`\`\`
This tells the computer to display: **Hello, World!**

\`print()\` is a **function** — a built-in command. Whatever you put inside the quotes gets shown on screen.
    `,
    quiz: [
      { q: "Who created Python?", options: ["Bill Gates", "Guido van Rossum", "Elon Musk", "Mark Zuckerberg"], ans: 1 },
      { q: "What does print(\"Hi\") do?", options: ["Prints on paper", "Shows 'Hi' on screen", "Deletes Hi", "Nothing"], ans: 1 },
      { q: "Python is named after a…", options: ["Snake", "Programming book", "Comedy show", "University"], ans: 2 },
    ]
  },
  {
    id: 2,
    emoji: "📦",
    title: "Variables & Data Types",
    color: "#F7774F",
    content: `
A **variable** is like a labeled box that stores information.

\`\`\`python
name = "Alice"
age = 12
height = 1.55
is_student = True
\`\`\`

🗂️ **The 4 Main Data Types:**

| Type | Example | What it stores |
|------|---------|----------------|
| **String (str)** | "Hello" | Text |
| **Integer (int)** | 42 | Whole numbers |
| **Float** | 3.14 | Decimal numbers |
| **Boolean** | True / False | Yes or No |

**Checking the type:**
\`\`\`python
x = 10
print(type(x))   # <class 'int'>
\`\`\`

**Rules for naming variables:**
- ✅ my_name, age2, total_score
- ❌ 2name, my-name, class (no spaces, dashes, or reserved words!)

**Tip:** Use underscores instead of spaces: \`my_name\` not \`my name\`
    `,
    quiz: [
      { q: "What type is: name = \"Alice\"?", options: ["int", "float", "str", "bool"], ans: 2 },
      { q: "Which variable name is VALID?", options: ["2cool", "my-name", "my_name", "class"], ans: 2 },
      { q: "True and False are which data type?", options: ["String", "Integer", "Float", "Boolean"], ans: 3 },
    ]
  },
  {
    id: 3,
    emoji: "🧮",
    title: "Math & Operators",
    color: "#4FC78A",
    content: `
Python can be used like a calculator!

\`\`\`python
print(5 + 3)    # 8   (addition)
print(10 - 4)   # 6   (subtraction)
print(3 * 4)    # 12  (multiplication)
print(15 / 4)   # 3.75 (division)
print(15 // 4)  # 3   (floor division - no decimals)
print(15 % 4)   # 3   (modulus - remainder)
print(2 ** 8)   # 256 (power/exponent)
\`\`\`

**Comparison Operators** (give True or False):
\`\`\`python
5 > 3    # True
5 < 3    # False
5 == 5   # True  (equal)
5 != 3   # True  (not equal)
5 >= 5   # True  (greater or equal)
\`\`\`

**String joining (concatenation):**
\`\`\`python
first = "Hello"
second = "World"
print(first + " " + second)  # Hello World
\`\`\`

**f-strings** — the cool way to mix variables and text:
\`\`\`python
name = "Alice"
age = 12
print(f"My name is {name} and I am {age} years old.")
\`\`\`
    `,
    quiz: [
      { q: "What does 10 % 3 equal?", options: ["3", "1", "0", "3.3"], ans: 1 },
      { q: "What does ** mean in Python?", options: ["Multiply", "Divide", "Power/Exponent", "Equals"], ans: 2 },
      { q: "Which checks if two values are equal?", options: ["=", "=>", "==", "!="], ans: 2 },
    ]
  },
  {
    id: 4,
    emoji: "❓",
    title: "If / Else Decisions",
    color: "#B44FF7",
    content: `
Computers make decisions just like you do! **If** something is true, do this. **Else**, do that.

\`\`\`python
age = 15

if age >= 18:
    print("You can vote! 🗳️")
else:
    print("Too young to vote. 😅")
\`\`\`

**elif** = "else if" — for more choices:
\`\`\`python
score = 75

if score >= 90:
    print("Grade: A 🌟")
elif score >= 80:
    print("Grade: B 👍")
elif score >= 70:
    print("Grade: C 😊")
else:
    print("Grade: F 😢 Study more!")
\`\`\`

⚠️ **VERY IMPORTANT — Indentation!**
Python uses **spaces/tabs** to know what's inside an if block. Always indent 4 spaces!

\`\`\`python
if True:
    print("This is inside the if")  # 4 spaces!
print("This is outside")
\`\`\`

**Logical Operators:**
- \`and\` — both must be true
- \`or\` — at least one must be true
- \`not\` — flips True to False
    `,
    quiz: [
      { q: "What keyword do you use for 'otherwise'?", options: ["elif", "else", "or", "not"], ans: 1 },
      { q: "How many spaces for indentation in Python?", options: ["2", "3", "4", "8"], ans: 2 },
      { q: "What does 'and' require?", options: ["One condition true", "Both conditions true", "No conditions", "Either or"], ans: 1 },
    ]
  },
  {
    id: 5,
    emoji: "🔁",
    title: "Loops",
    color: "#F7C84F",
    content: `
Loops let you repeat code without writing it over and over!

**For Loop** — repeat a set number of times:
\`\`\`python
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4
\`\`\`

**range(start, stop, step):**
\`\`\`python
for i in range(1, 10, 2):
    print(i)  # 1, 3, 5, 7, 9
\`\`\`

**Loop through a list:**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

**While Loop** — repeat WHILE something is true:
\`\`\`python
count = 0
while count < 5:
    print(count)
    count = count + 1
\`\`\`

⚠️ **Avoid infinite loops!** Always make sure the while condition becomes False eventually.

**break** — stop the loop early:
\`\`\`python
for i in range(10):
    if i == 5:
        break   # stops at 5
    print(i)
\`\`\`

**continue** — skip this round and keep going:
\`\`\`python
for i in range(5):
    if i == 2:
        continue   # skips 2
    print(i)  # prints 0,1,3,4
\`\`\`
    `,
    quiz: [
      { q: "What does range(3) produce?", options: ["1,2,3", "0,1,2", "0,1,2,3", "1,2"], ans: 1 },
      { q: "Which loop runs WHILE a condition is true?", options: ["for loop", "while loop", "if loop", "range loop"], ans: 1 },
      { q: "What does 'break' do in a loop?", options: ["Continues to next round", "Stops the loop", "Restarts the loop", "Nothing"], ans: 1 },
    ]
  },
  {
    id: 6,
    emoji: "📋",
    title: "Lists & Collections",
    color: "#4FF7E8",
    content: `
A **list** stores multiple items in one variable — like a shopping list!

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]
\`\`\`

**Accessing items (index starts at 0!):**
\`\`\`python
print(fruits[0])   # apple
print(fruits[1])   # banana
print(fruits[-1])  # cherry (last item!)
\`\`\`

**Common List Methods:**
\`\`\`python
fruits.append("mango")    # add to end
fruits.remove("banana")   # remove item
fruits.sort()             # sort alphabetically
len(fruits)               # count items → 3
\`\`\`

**Slicing** — grab a chunk:
\`\`\`python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])   # [20, 30, 40]
print(nums[:3])    # [10, 20, 30]
\`\`\`

**Tuples** — like lists, but can't be changed:
\`\`\`python
coordinates = (10, 20)
\`\`\`

**Dictionaries** — key-value pairs (like a real dictionary!):
\`\`\`python
person = {
    "name": "Alice",
    "age": 12,
    "city": "New York"
}
print(person["name"])  # Alice
\`\`\`
    `,
    quiz: [
      { q: "What index is the FIRST item in a list?", options: ["1", "-1", "0", "first"], ans: 2 },
      { q: "Which method adds an item to a list?", options: ["add()", "insert()", "append()", "push()"], ans: 2 },
      { q: "What stores key-value pairs in Python?", options: ["List", "Tuple", "Set", "Dictionary"], ans: 3 },
    ]
  },
  {
    id: 7,
    emoji: "⚙️",
    title: "Functions",
    color: "#F74F4F",
    content: `
A **function** is a reusable block of code. Write it once, use it many times!

\`\`\`python
def greet():
    print("Hello! Welcome!")

greet()  # call the function
greet()  # call it again!
\`\`\`

**Functions with parameters (inputs):**
\`\`\`python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")   # Hello, Alice!
greet("Bob")     # Hello, Bob!
\`\`\`

**Functions that return a value:**
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

**Default parameters:**
\`\`\`python
def greet(name="stranger"):
    print(f"Hello, {name}!")

greet()          # Hello, stranger!
greet("Alice")   # Hello, Alice!
\`\`\`

**Why use functions?**
- ✅ Avoid repeating yourself
- ✅ Keep code organized
- ✅ Easy to test and fix
- ✅ Makes code readable

Think of functions like recipes 🍕 — write the recipe once, cook it anytime!
    `,
    quiz: [
      { q: "What keyword defines a function?", options: ["func", "define", "def", "function"], ans: 2 },
      { q: "What does 'return' do in a function?", options: ["Stops the program", "Sends a value back", "Prints output", "Loops"], ans: 1 },
      { q: "Can a function have default parameter values?", options: ["No", "Yes", "Only in Python 3", "Only numbers"], ans: 1 },
    ]
  },
  {
    id: 8,
    emoji: "🚨",
    title: "Error Handling",
    color: "#F79A4F",
    content: `
Errors happen! Python has a safe way to handle them so your program doesn't crash.

**Common errors:**
\`\`\`python
print(10 / 0)      # ZeroDivisionError!
int("hello")       # ValueError!
myList[99]         # IndexError!
\`\`\`

**try / except — catch errors gracefully:**
\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Oops! Can't divide by zero!")
\`\`\`

**Catch any error:**
\`\`\`python
try:
    number = int(input("Enter a number: "))
    print(f"Double is: {number * 2}")
except ValueError:
    print("That's not a number!")
\`\`\`

**finally** — always runs, error or not:
\`\`\`python
try:
    f = open("file.txt")
except FileNotFoundError:
    print("File not found!")
finally:
    print("This always runs!")
\`\`\`

**Common Error Types:**
| Error | Cause |
|-------|-------|
| SyntaxError | Bad code structure |
| NameError | Variable not defined |
| TypeError | Wrong data type |
| IndexError | List index too big |
| ValueError | Wrong value given |
    `,
    quiz: [
      { q: "What keyword starts error handling?", options: ["catch", "try", "error", "safe"], ans: 1 },
      { q: "What error happens with 10 / 0?", options: ["ValueError", "SyntaxError", "ZeroDivisionError", "TypeError"], ans: 2 },
      { q: "When does 'finally' block run?", options: ["Only on error", "Only on success", "Always", "Never"], ans: 2 },
    ]
  },
];

const chapterColors = chapters.map(c => c.color);

export default function PythonGuide() {
  const [currentChapter, setCurrentChapter] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completedChapters, setCompletedChapters] = useState([]);

  const selectChapter = (ch) => {
    setCurrentChapter(ch);
    setQuizMode(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    const allCorrect = currentChapter.quiz.every((q, i) => quizAnswers[i] === q.ans);
    if (allCorrect && !completedChapters.includes(currentChapter.id)) {
      setCompletedChapters(prev => [...prev, currentChapter.id]);
    }
  };

  const score = currentChapter && quizSubmitted
    ? currentChapter.quiz.filter((q, i) => quizAnswers[i] === q.ans).length
    : 0;

  const renderContent = (text) => {
    const lines = text.trim().split('\n');
    const result = [];
    let inCode = false;
    let codeLines = [];
    let inTable = false;
    let tableRows = [];

    const flushTable = () => {
      if (tableRows.length > 1) {
        const headers = tableRows[0].split('|').filter(Boolean).map(h => h.trim());
        const rows = tableRows.slice(2).map(r => r.split('|').filter(Boolean).map(c => c.trim()));
        result.push(
          <div key={result.length} style={{overflowX:'auto',margin:'12px 0'}}>
            <table style={{borderCollapse:'collapse',width:'100%',fontSize:'14px'}}>
              <thead>
                <tr>{headers.map((h,i) => <th key={i} style={{background:'#f0f4ff',padding:'8px 12px',border:'1px solid #ddd',textAlign:'left'}}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((row,i) => <tr key={i}>{row.map((cell,j) => <td key={j} style={{padding:'8px 12px',border:'1px solid #ddd'}} dangerouslySetInnerHTML={{__html: cell.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />)}</tr>)}
              </tbody>
            </table>
          </div>
        );
      }
      tableRows = [];
      inTable = false;
    };

    lines.forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCode) {
          result.push(<pre key={result.length} style={{background:'#1e1e2e',color:'#cdd6f4',padding:'16px',borderRadius:'10px',overflowX:'auto',fontSize:'13px',lineHeight:'1.6',margin:'12px 0'}}><code>{codeLines.join('\n')}</code></pre>);
          codeLines = []; inCode = false;
        } else { inCode = true; }
        return;
      }
      if (inCode) { codeLines.push(line); return; }

      if (line.startsWith('|')) {
        inTable = true; tableRows.push(line); return;
      } else if (inTable) { flushTable(); }

      if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
        result.push(<p key={result.length} style={{fontWeight:'700',fontSize:'15px',margin:'14px 0 4px'}}>{line.slice(2,-2)}</p>);
      } else if (line.startsWith('- ')) {
        result.push(<li key={result.length} style={{margin:'4px 0 4px 20px',fontSize:'14px'}} dangerouslySetInnerHTML={{__html: line.slice(2).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code style="background:#f0f4ff;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:13px">$1</code>')}} />);
      } else if (line.trim() === '') {
        result.push(<br key={result.length} />);
      } else {
        result.push(<p key={result.length} style={{margin:'6px 0',fontSize:'14px',lineHeight:'1.7'}} dangerouslySetInnerHTML={{__html: line.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`(.*?)`/g,'<code style="background:#f0f4ff;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:13px">$1</code>')}} />);
      }
    });
    if (inTable) flushTable();
    return result;
  };

  return (
    <div style={{fontFamily:"'Segoe UI',system-ui,sans-serif",minHeight:'100vh',background:'#f8f9ff',color:'#1a1a2e'}}>
      {/* Header */}
      <div style={{background:'linear-gradient(135deg,#4F8EF7 0%,#B44FF7 100%)',padding:'28px 24px',textAlign:'center',color:'#fff'}}>
        <div style={{fontSize:'40px',marginBottom:'6px'}}>🐍</div>
        <h1 style={{margin:0,fontSize:'26px',fontWeight:'800',letterSpacing:'-0.5px'}}>Python Study Guide</h1>
        <p style={{margin:'6px 0 0',opacity:.85,fontSize:'14px'}}>From Zero to Coder — Easy, Fun & Complete!</p>
        <div style={{marginTop:'12px',display:'flex',justifyContent:'center',gap:'8px',flexWrap:'wrap'}}>
          <span style={{background:'rgba(255,255,255,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>✅ {completedChapters.length}/{chapters.length} Chapters Complete</span>
          <span style={{background:'rgba(255,255,255,0.2)',borderRadius:'20px',padding:'4px 12px',fontSize:'12px'}}>🧪 {chapters.length} Quizzes</span>
        </div>
      </div>

      <div style={{maxWidth:'860px',margin:'0 auto',padding:'20px 16px'}}>
        {/* Chapter Grid */}
        {!currentChapter && (
          <>
            <h2 style={{textAlign:'center',fontSize:'18px',fontWeight:'700',margin:'0 0 16px',color:'#333'}}>📚 Choose a Chapter to Start!</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))',gap:'14px'}}>
              {chapters.map(ch => (
                <div key={ch.id} onClick={() => selectChapter(ch)}
                  style={{background:'#fff',borderRadius:'14px',padding:'20px 16px',cursor:'pointer',boxShadow:'0 2px 12px rgba(0,0,0,0.08)',borderLeft:`5px solid ${ch.color}`,transition:'transform .15s,box-shadow .15s',position:'relative'}}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.13)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.08)'; }}>
                  {completedChapters.includes(ch.id) && <span style={{position:'absolute',top:'10px',right:'12px',fontSize:'16px'}}>✅</span>}
                  <div style={{fontSize:'28px',marginBottom:'8px'}}>{ch.emoji}</div>
                  <div style={{fontSize:'11px',fontWeight:'700',color:ch.color,marginBottom:'3px'}}>CHAPTER {ch.id}</div>
                  <div style={{fontSize:'14px',fontWeight:'700',color:'#1a1a2e'}}>{ch.title}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:'28px',background:'#fff',borderRadius:'14px',padding:'20px',boxShadow:'0 2px 12px rgba(0,0,0,0.06)'}}>
              <h3 style={{margin:'0 0 12px',fontSize:'16px'}}>🗺️ Your Learning Path</h3>
              <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',gap:'6px',fontSize:'12px'}}>
                {chapters.map((ch,i) => (<>
                  <span key={ch.id} style={{background:completedChapters.includes(ch.id)?ch.color:'#eee',color:completedChapters.includes(ch.id)?'#fff':'#666',padding:'4px 10px',borderRadius:'20px',fontWeight:'600'}}>{ch.emoji} {ch.title}</span>
                  {i < chapters.length-1 && <span style={{color:'#aaa'}}>→</span>}
                </>))}
              </div>
            </div>
          </>
        )}

        {/* Chapter Content */}
        {currentChapter && !quizMode && (
          <div>
            <button onClick={() => setCurrentChapter(null)} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:'14px',fontWeight:'600',marginBottom:'12px',padding:'0'}}>← Back to Chapters</button>
            <div style={{background:'#fff',borderRadius:'16px',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
              <div style={{background:`linear-gradient(135deg,${currentChapter.color},${currentChapter.color}99)`,padding:'24px',color:'#fff'}}>
                <div style={{fontSize:'36px',marginBottom:'6px'}}>{currentChapter.emoji}</div>
                <div style={{fontSize:'12px',fontWeight:'700',opacity:.8,marginBottom:'4px'}}>CHAPTER {currentChapter.id}</div>
                <h2 style={{margin:0,fontSize:'22px',fontWeight:'800'}}>{currentChapter.title}</h2>
              </div>
              <div style={{padding:'24px'}}>
                {renderContent(currentChapter.content)}
              </div>
              <div style={{padding:'0 24px 24px',display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <button onClick={startQuiz} style={{background:currentChapter.color,color:'#fff',border:'none',borderRadius:'10px',padding:'12px 24px',fontWeight:'700',fontSize:'14px',cursor:'pointer'}}>🧪 Take the Quiz!</button>
                <button onClick={() => setCurrentChapter(null)} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:'10px',padding:'12px 24px',fontWeight:'700',fontSize:'14px',cursor:'pointer'}}>📚 Back to Chapters</button>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {currentChapter && quizMode && (
          <div>
            <button onClick={() => setQuizMode(false)} style={{background:'none',border:'none',color:'#4F8EF7',cursor:'pointer',fontSize:'14px',fontWeight:'600',marginBottom:'12px',padding:'0'}}>← Back to Chapter</button>
            <div style={{background:'#fff',borderRadius:'16px',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
              <div style={{background:`linear-gradient(135deg,${currentChapter.color},${currentChapter.color}99)`,padding:'20px 24px',color:'#fff'}}>
                <div style={{fontSize:'24px',marginBottom:'4px'}}>🧪 Quiz Time!</div>
                <h2 style={{margin:0,fontSize:'18px',fontWeight:'800'}}>Chapter {currentChapter.id}: {currentChapter.title}</h2>
              </div>
              <div style={{padding:'24px'}}>
                {currentChapter.quiz.map((q, qi) => {
                  const answered = quizAnswers[qi] !== undefined;
                  const correct = quizAnswers[qi] === q.ans;
                  return (
                    <div key={qi} style={{marginBottom:'24px',padding:'18px',borderRadius:'12px',border:`2px solid ${quizSubmitted ? (correct ? '#4FC78A' : '#F74F4F') : '#eef0ff'}`,background:quizSubmitted ? (correct ? '#f0fff8' : '#fff4f4') : '#fafbff'}}>
                      <p style={{fontWeight:'700',fontSize:'15px',margin:'0 0 12px'}}>Q{qi+1}: {q.q}</p>
                      <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                        {q.options.map((opt, oi) => {
                          let bg = '#f4f6ff', border = '1px solid #dde', color = '#333';
                          if (quizAnswers[qi] === oi) { bg = `${currentChapter.color}22`; border = `2px solid ${currentChapter.color}`; color = currentChapter.color; }
                          if (quizSubmitted && oi === q.ans) { bg = '#e8fff4'; border = '2px solid #4FC78A'; color = '#1a7a4a'; }
                          if (quizSubmitted && quizAnswers[qi] === oi && oi !== q.ans) { bg = '#fff0f0'; border = '2px solid #F74F4F'; color = '#c0392b'; }
                          return (
                            <div key={oi} onClick={() => !quizSubmitted && setQuizAnswers(prev => ({...prev,[qi]:oi}))}
                              style={{padding:'10px 14px',borderRadius:'8px',cursor:quizSubmitted?'default':'pointer',background:bg,border,color,fontWeight:'600',fontSize:'14px',transition:'all .15s',display:'flex',alignItems:'center',gap:'8px'}}>
                              {quizSubmitted && oi === q.ans && <span>✅</span>}
                              {quizSubmitted && quizAnswers[qi] === oi && oi !== q.ans && <span>❌</span>}
                              {opt}
                            </div>
                          );
                        })}
                      </div>
                      {quizSubmitted && <p style={{margin:'10px 0 0',fontSize:'13px',color: correct ? '#1a7a4a' : '#c0392b',fontWeight:'600'}}>{correct ? '🎉 Correct!' : `💡 Correct answer: "${q.options[q.ans]}"`}</p>}
                    </div>
                  );
                })}
                {!quizSubmitted ? (
                  <button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < currentChapter.quiz.length}
                    style={{background:Object.keys(quizAnswers).length < currentChapter.quiz.length?'#ccc':currentChapter.color,color:'#fff',border:'none',borderRadius:'10px',padding:'13px 28px',fontWeight:'700',fontSize:'15px',cursor:Object.keys(quizAnswers).length < currentChapter.quiz.length?'not-allowed':'pointer',width:'100%'}}>
                    {Object.keys(quizAnswers).length < currentChapter.quiz.length ? `Answer all questions (${Object.keys(quizAnswers).length}/${currentChapter.quiz.length})` : 'Submit Quiz 🚀'}
                  </button>
                ) : (
                  <div style={{textAlign:'center',padding:'20px',background:'#f8f9ff',borderRadius:'12px'}}>
                    <div style={{fontSize:'40px',marginBottom:'8px'}}>{score === currentChapter.quiz.length ? '🏆' : score >= 2 ? '👍' : '📖'}</div>
                    <p style={{fontWeight:'800',fontSize:'20px',margin:'0 0 4px'}}>Score: {score}/{currentChapter.quiz.length}</p>
                    <p style={{color:'#666',fontSize:'14px',margin:'0 0 16px'}}>{score === currentChapter.quiz.length ? 'Perfect score! Amazing! 🎉' : score >= 2 ? 'Great job! Keep it up!' : 'Review the chapter and try again!'}</p>
                    <div style={{display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap'}}>
                      <button onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }} style={{background:'#f0f4ff',color:'#4F8EF7',border:'none',borderRadius:'10px',padding:'10px 20px',fontWeight:'700',fontSize:'14px',cursor:'pointer'}}>🔄 Retry Quiz</button>
                      <button onClick={() => setCurrentChapter(null)} style={{background:currentChapter.color,color:'#fff',border:'none',borderRadius:'10px',padding:'10px 20px',fontWeight:'700',fontSize:'14px',cursor:'pointer'}}>📚 Next Chapter</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{textAlign:'center',marginTop:'28px',padding:'16px',fontSize:'13px',color:'#999'}}>
          🐍 Python Study Guide • 8 Chapters • Made for Everyone from Kids to Adults!
        </div>
      </div>
    </div>
  );
}
