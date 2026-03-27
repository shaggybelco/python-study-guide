import { useState, useEffect, useRef, useCallback } from "react";

// ─── TYPING SNIPPETS (tied to chapter concepts) ──────────────────────────────

const SNIPPETS = [
  // Beginner (Chapters 1-4)
  { level: "Beginner", label: "Print Statements", lines: [
    'print("Hello, World!")',
    'print("My name is Alice")',
    'print(2 + 2)',
    'print("Python is fun!")',
  ]},
  { level: "Beginner", label: "Variables", lines: [
    'name = "Alice"',
    'age = 20',
    'height = 1.75',
    'is_student = True',
    'print(name)',
  ]},
  { level: "Beginner", label: "Math & f-strings", lines: [
    'x = 10',
    'y = 3',
    'print(x + y)',
    'print(x ** 2)',
    'print(f"x is {x}")',
  ]},
  { level: "Beginner", label: "If/Else", lines: [
    'age = 15',
    'if age >= 18:',
    '    print("Adult")',
    'elif age >= 13:',
    '    print("Teen")',
    'else:',
    '    print("Child")',
  ]},
  // Intermediate (Chapters 5-9)
  { level: "Intermediate", label: "For Loops", lines: [
    'for i in range(5):',
    '    print(i)',
    '',
    'fruits = ["apple", "banana"]',
    'for fruit in fruits:',
    '    print(fruit)',
  ]},
  { level: "Intermediate", label: "While Loop", lines: [
    'count = 0',
    'while count < 5:',
    '    print(count)',
    '    count += 1',
    'print("Done!")',
  ]},
  { level: "Intermediate", label: "Lists & Dicts", lines: [
    'fruits = ["apple", "banana", "cherry"]',
    'fruits.append("mango")',
    'print(fruits[0])',
    'person = {"name": "Alice", "age": 20}',
    'print(person["name"])',
  ]},
  { level: "Intermediate", label: "Functions", lines: [
    'def greet(name):',
    '    return f"Hello, {name}!"',
    '',
    'message = greet("Alice")',
    'print(message)',
  ]},
  { level: "Intermediate", label: "String Methods", lines: [
    'text = "Hello World"',
    'print(text.upper())',
    'print(text.lower())',
    'print(text.split())',
    'print(text[::-1])',
  ]},
  { level: "Intermediate", label: "Error Handling", lines: [
    'try:',
    '    x = int(input("Number: "))',
    '    print(x * 2)',
    'except ValueError:',
    '    print("Not a number!")',
    'finally:',
    '    print("Done")',
  ]},
  // Advanced (Chapters 10-15)
  { level: "Advanced", label: "List Comprehension", lines: [
    'squares = [x ** 2 for x in range(10)]',
    'evens = [x for x in range(20) if x % 2 == 0]',
    'names = ["alice", "bob", "charlie"]',
    'upper = [n.upper() for n in names]',
    'print(upper)',
  ]},
  { level: "Advanced", label: "Classes", lines: [
    'class Dog:',
    '    def __init__(self, name):',
    '        self.name = name',
    '',
    '    def bark(self):',
    '        print(f"{self.name}: Woof!")',
    '',
    'dog = Dog("Buddy")',
    'dog.bark()',
  ]},
  { level: "Advanced", label: "File Handling", lines: [
    'with open("data.txt", "w") as f:',
    '    f.write("Hello\\n")',
    '    f.write("World\\n")',
    '',
    'with open("data.txt", "r") as f:',
    '    content = f.read()',
    '    print(content)',
  ]},
  { level: "Advanced", label: "Recursion", lines: [
    'def factorial(n):',
    '    if n <= 1:',
    '        return 1',
    '    return n * factorial(n - 1)',
    '',
    'print(factorial(5))',
    'print(factorial(10))',
  ]},
];

// ─── TYPING GAME COMPONENT ──────────────────────────────────────────────────

export default function TypingGame({ onAwardXP, onAwardBadge }) {
  const [filter, setFilter] = useState("All");
  const [snippetIdx, setSnippetIdx] = useState(null);
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [errors, setErrors] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [bestWPM, setBestWPM] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pysg_bestWPM")) || 0; } catch { return 0; }
  });
  const inputRef = useRef();

  const snippet = snippetIdx !== null ? SNIPPETS[snippetIdx] : null;
  const target = snippet ? snippet.lines.join("\n") : "";
  const isFinished = snippet && typed === target;
  const isActive = snippet && !isFinished && startTime && !endTime;

  // Calculate WPM and accuracy
  const elapsed = endTime && startTime ? (endTime - startTime) / 1000 : (isActive ? (Date.now() - startTime) / 1000 : 0);
  const words = typed.length / 5; // standard: 5 chars = 1 word
  const wpm = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;
  const accuracy = totalKeystrokes > 0 ? Math.round(((totalKeystrokes - errors) / totalKeystrokes) * 100) : 100;

  // Live WPM ticker
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(() => setTick(t => t + 1), 500);
    return () => clearInterval(id);
  }, [isActive]);

  const startSnippet = useCallback((idx) => {
    setSnippetIdx(idx);
    setTyped("");
    setStartTime(null);
    setEndTime(null);
    setErrors(0);
    setTotalKeystrokes(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (isFinished || snippetIdx === null) return;

    // Start timer on first keystroke
    if (!startTime) setStartTime(Date.now());

    if (e.key === "Tab") {
      e.preventDefault();
      const next = typed + "    ";
      if (target.startsWith(next)) {
        setTyped(next);
        setTotalKeystrokes(k => k + 4);
      } else {
        setErrors(err => err + 1);
        setTotalKeystrokes(k => k + 1);
      }
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const next = typed + "\n";
      if (target.startsWith(next)) {
        setTyped(next);
        setTotalKeystrokes(k => k + 1);
        // Check completion
        if (next === target) {
          setEndTime(Date.now());
        }
      } else {
        setErrors(err => err + 1);
        setTotalKeystrokes(k => k + 1);
      }
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      if (typed.length > 0) {
        setTyped(typed.slice(0, -1));
      }
      return;
    }

    if (e.key.length === 1) {
      e.preventDefault();
      const next = typed + e.key;
      setTotalKeystrokes(k => k + 1);
      if (target.startsWith(next)) {
        setTyped(next);
        // Check completion
        if (next === target) {
          setEndTime(Date.now());
        }
      } else {
        setErrors(err => err + 1);
      }
    }
  }, [typed, target, isFinished, snippetIdx, startTime]);

  // Award XP when finished
  useEffect(() => {
    if (isFinished && endTime) {
      const xpAmount = snippet.level === "Beginner" ? 20 : snippet.level === "Intermediate" ? 35 : 50;
      const bonus = accuracy >= 95 ? 15 : accuracy >= 85 ? 5 : 0;
      onAwardXP?.(xpAmount + bonus, `Typing: ${snippet.label}`);
      onAwardBadge?.("typist");
      if (wpm > bestWPM) {
        setBestWPM(wpm);
        localStorage.setItem("pysg_bestWPM", JSON.stringify(wpm));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished, endTime]);

  const filtered = filter === "All" ? SNIPPETS : SNIPPETS.filter(s => s.level === filter);

  // ─── RENDER ──────────────────────────────────────────────────────────────

  // Snippet selector
  if (snippetIdx === null) {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontWeight: 800, fontSize: 20, margin: "0 0 2px" }}>⌨️ Code Typing Practice</h2>
          <p style={{ color: "#888", fontSize: 14, margin: "0 0 8px" }}>Type real Python code to build muscle memory and speed!</p>
          {'ontouchstart' in window && (
            <div style={{ background: "#fff8f0", border: "2px solid #F7A84F", borderRadius: 10, padding: "8px 14px", marginBottom: 12, fontSize: 13, color: "#8a6d3b" }}>
              📱 <strong>Note:</strong> This game works best with a physical keyboard. On mobile/tablet, the experience may be limited.
            </div>
          )}
          {bestWPM > 0 && (
            <div style={{ background: "#f0fff8", border: "2px solid #4FC78A", borderRadius: 12, padding: "10px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>🏆</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1a7a4a" }}>Your Best: {bestWPM} WPM</div>
                <div style={{ fontSize: 12, color: "#888" }}>Keep practicing to beat your record!</div>
              </div>
            </div>
          )}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {["All", "Beginner", "Intermediate", "Advanced"].map(l => (
              <button key={l} onClick={() => setFilter(l)}
                style={{ padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12, background: filter === l ? "#4F8EF7" : "#eef0ff", color: filter === l ? "#fff" : "#4F8EF7" }}>
                {l === "Beginner" ? "🟢" : l === "Intermediate" ? "🟡" : l === "Advanced" ? "🔴" : "📚"} {l}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
          {filtered.map((s, i) => {
            const realIdx = SNIPPETS.indexOf(s);
            return (
              <div key={realIdx} onClick={() => startSnippet(realIdx)}
                style={{ background: "#fff", borderRadius: 14, padding: "16px 14px", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", borderLeft: `5px solid ${s.level === "Beginner" ? "#4FC78A" : s.level === "Intermediate" ? "#F7C84F" : "#F74F4F"}`, transition: "transform .15s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: 11, fontWeight: 700, color: s.level === "Beginner" ? "#4FC78A" : s.level === "Intermediate" ? "#F7A84F" : "#F74F4F" }}>{s.level}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>⌨️ {s.label}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{s.lines.length} lines • {s.lines.join("").length} chars</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── ACTIVE TYPING VIEW ────────────────────────────────────────────────────

  const renderTarget = () => {
    const chars = target.split("");
    return chars.map((char, i) => {
      let color = "#555";    // not yet typed
      let bg = "transparent";
      if (i < typed.length) {
        if (typed[i] === char) {
          color = "#4FC78A"; // correct
        } else {
          color = "#F74F4F"; // wrong (shouldn't happen with current logic, but safety)
          bg = "#F74F4F22";
        }
      } else if (i === typed.length) {
        bg = "#4F8EF722";    // cursor position
        color = "#4F8EF7";
      }

      // Render special chars
      let display = char;
      if (char === " ") display = "\u00A0"; // non-breaking space
      if (char === "\n") {
        return (
          <span key={i}>
            <span style={{ color: i < typed.length ? "#4FC78A44" : "#33333344", fontSize: 11 }}>↵</span>
            <br />
          </span>
        );
      }

      return (
        <span key={i} style={{ color, background: bg, borderRadius: 2, transition: "color 0.1s" }}>
          {display}
        </span>
      );
    });
  };

  return (
    <div>
      <button onClick={() => setSnippetIdx(null)}
        style={{ background: "none", border: "none", color: "#4F8EF7", cursor: "pointer", fontSize: 14, fontWeight: 600, marginBottom: 12, padding: 0 }}>
        ← Back to Snippets
      </button>

      <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        {/* Header */}
        <div style={{ background: "linear-gradient(135deg,#4F8EF7,#B44FF7)", padding: "16px 24px", color: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.8 }}>{snippet.level} • {snippet.label}</div>
              <h2 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 800 }}>⌨️ Type the Code!</h2>
            </div>
            <div style={{ display: "flex", gap: 12, textAlign: "center" }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{wpm}</div>
                <div style={{ fontSize: 10, opacity: 0.8 }}>WPM</div>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{accuracy}%</div>
                <div style={{ fontSize: 10, opacity: 0.8 }}>Accuracy</div>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{Math.round(elapsed)}s</div>
                <div style={{ fontSize: 10, opacity: 0.8 }}>Time</div>
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 20, height: 6, marginTop: 12 }}>
            <div style={{ background: "#4FC78A", borderRadius: 20, height: 6, width: `${target.length > 0 ? (typed.length / target.length) * 100 : 0}%`, transition: "width 0.2s" }} />
          </div>
        </div>

        {/* Typing area */}
        <div style={{ padding: 24 }}>
          {!startTime && !isFinished && (
            <div style={{ textAlign: "center", padding: "12px 0 20px", color: "#888", fontSize: 14 }}>
              Start typing to begin! The timer starts on your first keystroke.
            </div>
          )}

          {/* Code display */}
          <div
            tabIndex={0}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            style={{ background: "#1e1e2e", borderRadius: 12, padding: "18px 20px", fontFamily: "monospace", fontSize: 15, lineHeight: 1.8, minHeight: 120, outline: "none", cursor: "text", whiteSpace: "pre-wrap", wordBreak: "break-all", border: isActive ? "2px solid #4F8EF7" : "2px solid #2d2d3f" }}>
            {renderTarget()}
          </div>

          {!isFinished && (
            <p style={{ color: "#aaa", fontSize: 12, marginTop: 8 }}>
              💡 Click the code area to focus, then type. Use <strong>Tab</strong> for indentation, <strong>Enter</strong> for new lines, <strong>Backspace</strong> to fix mistakes.
            </p>
          )}

          {/* Results */}
          {isFinished && (
            <div style={{ textAlign: "center", padding: 24, background: "#f8f9ff", borderRadius: 12, marginTop: 16 }}>
              <div style={{ fontSize: 50, marginBottom: 8 }}>{wpm >= 40 ? "🏆" : wpm >= 25 ? "⚡" : wpm >= 15 ? "👍" : "📝"}</div>
              <h3 style={{ margin: "0 0 4px", fontSize: 24, fontWeight: 800 }}>{wpm} WPM</h3>
              <p style={{ color: "#666", fontSize: 14, margin: "0 0 8px" }}>
                {wpm >= 40 ? "Speed demon! You're flying!" : wpm >= 25 ? "Great speed! Keep it up!" : wpm >= 15 ? "Good pace! Practice makes perfect!" : "Keep going! Speed comes with practice!"}
              </p>
              <div style={{ display: "flex", gap: 20, justifyContent: "center", margin: "16px 0" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: accuracy >= 95 ? "#4FC78A" : accuracy >= 80 ? "#F7C84F" : "#F74F4F" }}>{accuracy}%</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Accuracy</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{Math.round(elapsed)}s</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Time</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{errors}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>Mistakes</div>
                </div>
              </div>
              {wpm > bestWPM - 1 && wpm === bestWPM && (
                <div style={{ background: "#f0fff8", border: "2px solid #4FC78A", borderRadius: 10, padding: "8px 14px", marginBottom: 12, fontWeight: 700, color: "#1a7a4a", fontSize: 14 }}>
                  🎉 New Personal Best!
                </div>
              )}
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => startSnippet(snippetIdx)}
                  style={{ background: "#f0f4ff", color: "#4F8EF7", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  🔄 Try Again
                </button>
                <button onClick={() => setSnippetIdx(null)}
                  style={{ background: "#4F8EF7", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  📋 More Snippets
                </button>
                {snippetIdx < SNIPPETS.length - 1 && (
                  <button onClick={() => startSnippet(snippetIdx + 1)}
                    style={{ background: "#B44FF7", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                    Next →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
