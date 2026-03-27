// ─── DATA ────────────────────────────────────────────────────────────────────

export const BADGES = [
  { id:"first_step", icon:"🐣", label:"First Step", desc:"Complete your first chapter" },
  { id:"quiz_master", icon:"🧠", label:"Quiz Master", desc:"Score 100% on any quiz" },
  { id:"on_fire", icon:"🔥", label:"On Fire", desc:"Complete 3 chapters in a row" },
  { id:"half_way", icon:"⭐", label:"Half Way", desc:"Complete 4 chapters" },
  { id:"python_pro", icon:"🏆", label:"Python Pro", desc:"Complete all chapters" },
  { id:"challenger", icon:"🎯", label:"Challenger", desc:"Complete a daily challenge" },
  { id:"gamer", icon:"🎮", label:"Gamer", desc:"Win a mini-game" },
  { id:"streak_3", icon:"📅", label:"3-Day Streak", desc:"Study 3 days in a row" },
  { id:"typist", icon:"⌨️", label:"Speed Typist", desc:"Complete a typing challenge" },
];

export const VIDEOS = {
  1: { title:"Python in 100 Seconds", url:"https://www.youtube.com/watch?v=x7X9w_GIm1s" },
  2: { title:"Variables & Data Types", url:"https://www.youtube.com/watch?v=Z1Yd7upQsXY" },
  3: { title:"Python Math & Operators", url:"https://www.youtube.com/watch?v=v5MR5JnKcZI" },
  4: { title:"If Statements Explained", url:"https://www.youtube.com/watch?v=AWek49wXGzI" },
  5: { title:"Python Loops", url:"https://www.youtube.com/watch?v=6iF8Xb7Z3wQ" },
  6: { title:"Lists & Dictionaries", url:"https://www.youtube.com/watch?v=W8KRzm-HUcc" },
  7: { title:"Python Functions", url:"https://www.youtube.com/watch?v=9Os0o3wzS_I" },
  8: { title:"Error Handling", url:"https://www.youtube.com/watch?v=NIWwJbo-9_8" },
  9: { title:"Python Strings", url:"https://www.youtube.com/watch?v=k9TUPpGqYTo" },
  10: { title:"Tuples & Sets", url:"https://www.youtube.com/watch?v=gOMW_n2-2Mw" },
  11: { title:"List Comprehensions", url:"https://www.youtube.com/watch?v=3dt4OGnU5sM" },
  12: { title:"Python Modules", url:"https://www.youtube.com/watch?v=XKHEtdqhLK8" },
  13: { title:"File Handling", url:"https://www.youtube.com/watch?v=Uh2ebFW8OYM" },
  14: { title:"OOP in Python", url:"https://www.youtube.com/watch?v=JeznW_7DlB0" },
  15: { title:"Recursion Explained", url:"https://www.youtube.com/watch?v=ivl5-snqul8" },
};

export const DAILY_CHALLENGES = [
  { id:1, title:"FizzBuzz", difficulty:"Beginner", xp:50, desc:"Print numbers 1-20. For multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'FizzBuzz'.", starter:"for i in range(1, 21):\n    # your code here\n    pass", hint:"Use the % (modulus) operator to check divisibility" },
  { id:2, title:"Reverse a String", difficulty:"Beginner", xp:30, desc:"Write a function that reverses a string. E.g. 'hello' → 'olleh'", starter:"def reverse_string(s):\n    # your code here\n    pass\n\nprint(reverse_string('hello'))", hint:"Try using slicing: s[::-1]" },
  { id:3, title:"Count Vowels", difficulty:"Intermediate", xp:60, desc:"Write a function that counts how many vowels are in a string.", starter:"def count_vowels(s):\n    vowels = 'aeiouAEIOU'\n    # your code here\n    pass\n\nprint(count_vowels('Hello World'))", hint:"Loop through each character and check if it's in the vowels string" },
  { id:4, title:"Palindrome Checker", difficulty:"Intermediate", xp:70, desc:"Check if a word is the same forwards and backwards. E.g. 'racecar' is a palindrome.", starter:"def is_palindrome(word):\n    # your code here\n    pass\n\nprint(is_palindrome('racecar'))\nprint(is_palindrome('hello'))", hint:"Compare the string to its reverse" },
  { id:5, title:"Simple Calculator", difficulty:"Advanced", xp:100, desc:"Build a calculator function that takes two numbers and an operator (+,-,*,/) and returns the result.", starter:"def calculator(a, operator, b):\n    # your code here\n    pass\n\nprint(calculator(10, '+', 5))\nprint(calculator(10, '/', 2))", hint:"Use if/elif for each operator, handle division by zero!" },
];

export const MINI_GAMES = [
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

export const PROJECTS = [
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
  { id:5, chapter:9, title:"Word Analyzer", icon:"🔍", difficulty:"Intermediate", xp:100,
    desc:"Build a program that analyzes a sentence: count words, count characters (no spaces), reverse the text, and find the most common letter.",
    starter:"sentence = 'Python is awesome and fun'\n\n# 1. Count the words\n# 2. Count characters (no spaces)\n# 3. Reverse the sentence\n# 4. Find the most common letter",
    solution:"sentence = 'Python is awesome and fun'\nwords = sentence.split()\nprint(f'Words: {len(words)}')\nchars = sentence.replace(' ', '')\nprint(f'Characters: {len(chars)}')\nprint(f'Reversed: {sentence[::-1]}')\nletters = sentence.replace(' ','').lower()\nmost = max(set(letters), key=letters.count)\nprint(f'Most common letter: {most}')" },
];

export const CHEATSHEET = [
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
    { code:'s[::-1]', desc:"Reverse a string" },
    { code:'"a" in s', desc:"Check if substring exists" },
    { code:'s.replace("a","b")', desc:"Replace characters" },
    { code:'s.count("a")', desc:"Count occurrences" },
    { code:'for ch in s:', desc:"Loop through characters" },
  ]},
  { cat:"✏️ Comments & Shortcuts", items:[
    { code:'# comment', desc:"Single-line comment" },
    { code:'x += 1', desc:"Same as x = x + 1" },
    { code:'x -= 1', desc:"Same as x = x - 1" },
    { code:'x if cond else y', desc:"Ternary (one-line if)" },
    { code:'d.items()', desc:"Dict key-value pairs loop" },
    { code:'max(d, key=d.get)', desc:"Key with highest value" },
  ]},
];

export const SETUP_GUIDE = [
  {
    id: 'windows', icon: '🪟', title: 'Installing on Windows',
    steps: [
      { title: 'Download Python', detail: 'Go to python.org/downloads and click the big yellow "Download Python 3.x" button. It will automatically detect you\'re on Windows.' },
      { title: 'Run the Installer', detail: '⚠️ IMPORTANT: Check the box that says "Add Python to PATH" at the bottom of the installer — this is the most common mistake beginners make! Then click "Install Now".' },
      { title: 'Wait for Installation', detail: 'The installer will run for a minute or two. When it says "Setup was successful", click Close.' },
      { title: 'Verify It Works', detail: 'Open Command Prompt (search "cmd" in Start menu) and type:\n\npython --version\n\nYou should see something like "Python 3.12.x". If you get an error, restart your PC and try again.' },
    ]
  },
  {
    id: 'mac', icon: '🍎', title: 'Installing on Mac',
    steps: [
      { title: 'Download Python', detail: 'Go to python.org/downloads and click the big yellow "Download Python 3.x" button. It detects macOS automatically.' },
      { title: 'Run the Installer', detail: 'Open the downloaded .pkg file and follow the steps — click Continue, Agree, then Install. You may need to enter your Mac password.' },
      { title: 'Verify It Works', detail: 'Open Terminal (search "Terminal" in Spotlight or find it in Applications → Utilities) and type:\n\npython3 --version\n\nYou should see "Python 3.12.x". On Mac, use python3 instead of python.' },
    ]
  },
  {
    id: 'linux', icon: '🐧', title: 'Installing on Linux',
    steps: [
      { title: 'Check If Already Installed', detail: 'Most Linux distros come with Python! Open a Terminal and type:\n\npython3 --version\n\nIf you see a version number, you\'re good to go!' },
      { title: 'Install If Needed (Ubuntu/Debian)', detail: 'If Python isn\'t installed, run these commands:\n\nsudo apt update\nsudo apt install python3 python3-pip\n\nFor Fedora: sudo dnf install python3 python3-pip' },
      { title: 'Verify It Works', detail: 'Type python3 --version in your Terminal. You should see the version number.' },
    ]
  },
];

export const SETUP_EDITORS = [
  { name: 'VS Code', icon: '💜', desc: 'The most popular free code editor. Download from code.visualstudio.com, then install the "Python" extension by Microsoft.', best: 'Best overall choice — great for beginners AND pros' },
  { name: 'IDLE', icon: '🐍', desc: 'Comes free with Python! After installing Python, search for "IDLE" on your PC. It\'s a simple editor perfect for learning.', best: 'Already installed with Python — zero setup' },
  { name: 'PyCharm Community', icon: '🧠', desc: 'A powerful Python-specific editor. Download the free Community Edition from jetbrains.com/pycharm.', best: 'Best Python-specific features' },
  { name: 'Thonny', icon: '🎓', desc: 'Designed specifically for beginners. Download from thonny.org — includes Python built in!', best: 'Easiest for absolute beginners' },
];

export const SETUP_FIRST_STEPS = [
  { title: 'Run Python Interactively', icon: '⚡', desc: 'Open your terminal/command prompt and type python (or python3 on Mac/Linux). You\'ll see the >>> prompt — type Python code and press Enter to run it instantly!', code: '>>> print("Hello!")\nHello!\n>>> 2 + 2\n4\n>>> exit()' },
  { title: 'Run a Python File', icon: '📄', desc: 'Create a file called hello.py with your code editor, write your code, save it, then run it from the terminal:', code: '# In your terminal:\npython hello.py\n\n# On Mac/Linux:\npython3 hello.py' },
  { title: 'Install Packages with pip', icon: '📦', desc: 'pip is Python\'s package manager — it lets you install extra tools other people have built. It comes with Python!', code: '# Install a package:\npip install requests\n\n# On Mac/Linux:\npip3 install requests\n\n# See installed packages:\npip list' },
];

export const chapters = [
  { id:1, emoji:"👋", title:"What is Python?", color:"#4F8EF7", level:"Beginner",
    content:`Python is a **programming language** — think of it like giving instructions to a computer in a language it understands. Just like you speak English to talk to people, you write Python to talk to computers!\n\n🐍 Python was created by **Guido van Rossum** in 1991. It's named after the comedy show "Monty Python's Flying Circus" — not the snake!\n\n**Why Python?**\n- 🟢 Super easy to read and write (looks like English!)\n- 🟢 Used by Google, NASA, Netflix, Instagram\n- 🟢 Great for websites, games, AI, data, and more!\n- 🟢 Free to use!\n\n**Your very first Python program:**\n\`\`\`python\nprint("Hello, World!")\n\`\`\`\n\nLet's break this down piece by piece:\n- \`print()\` is a **command** that Python already knows. It tells the computer: "Show this text on screen."\n- The quotes \`" "\` tell Python that this is text (not a math problem or variable name)\n- So \`print("Hello, World!")\` means: **show the text Hello, World! on the screen**\n\nThink of \`print()\` like a megaphone — whatever you put inside the brackets gets announced to the screen! 📢\n\n**Try changing what's inside the quotes:**\n\`\`\`python\nprint("My name is Alice")\nprint("I love pizza")\nprint("2 + 2")  # This prints the TEXT "2 + 2", not 4!\nprint(2 + 2)    # This prints 4 (no quotes = math!)\n\`\`\``,
    tryIt:[
      { after:2, prompt:"Write your first print statement — print your name!", starter:'print("Your Name Here")' },
    ],
    quiz:[
      { q:"Who created Python?", options:["Bill Gates","Guido van Rossum","Elon Musk","Mark Zuckerberg"], ans:1 },
      { q:'What does print("Hi") do?', options:["Prints on paper","Shows 'Hi' on screen","Deletes Hi","Nothing"], ans:1 },
      { q:"Python is named after a…", options:["Snake","Programming book","Comedy show","University"], ans:2 },
      { type:"output", q:"What does this code print?", code:'print("Hello!")', ans:"Hello!" },
    ]
  },
  { id:2, emoji:"📦", title:"Variables & Data Types", color:"#F7774F", level:"Beginner",
    content:`A **variable** is like a labeled box that stores information. You put something in the box and give it a name so you can use it later.\n\nThe \`=\` sign means **"store this value"** (NOT "equals" like in math!).\n\`\`\`python\nname = "Alice"       # Store the text Alice in a box called 'name'\nage = 12             # Store the number 12 in a box called 'age'\nheight = 1.55        # Store 1.55 in a box called 'height'\nis_student = True    # Store True in a box called 'is_student'\n\`\`\`\n\nNow you can use these boxes anywhere:\n\`\`\`python\nprint(name)       # Shows: Alice\nprint(age)        # Shows: 12\nprint(is_student) # Shows: True\n\`\`\`\n\n🗂️ **The 4 Main Data Types:**\n\nPython has different kinds of boxes for different kinds of data:\n\n| Type | Short name | Example | What it stores |\n|------|------------|---------|----------------|\n| **String** | str | "Hello" | Text (always in quotes!) |\n| **Integer** | int | 42 | Whole numbers (no decimals) |\n| **Float** | float | 3.14 | Decimal numbers |\n| **Boolean** | bool | True / False | Yes or No answers |\n\n**How to check what type something is:**\n\`\`\`python\nx = 10\nprint(type(x))   # Shows: <class 'int'>\n# This means x is an integer (whole number)\n\nname = "Bob"\nprint(type(name))  # Shows: <class 'str'>\n# This means name is a string (text)\n\`\`\`\n\n**Rules for naming variables:**\n- ✅ \`my_name\`, \`age2\`, \`total_score\` — these work!\n- ❌ \`2name\` — can't START with a number (Python thinks it's a number)\n- ❌ \`my-name\` — the dash means "subtract" to Python!\n- ❌ \`my name\` — spaces aren't allowed (use underscores instead)\n\n**Tip:** Use underscores instead of spaces: \`my_name\` not \`my name\``,
    tryIt:[
      { after:0, prompt:"Create variables for your name and age, then print them!", starter:'name = "___"\nage = ___\nprint(name)\nprint(age)' },
      { after:2, prompt:"Use type() to check what kind of data your variables hold", starter:'x = 42\nprint(type(x))\n\nword = "hello"\nprint(type(word))' },
    ],
    quiz:[
      { q:'What type is: name = "Alice"?', options:["int","float","str","bool"], ans:2 },
      { q:"Which variable name is VALID?", options:["2cool","my-name","my_name","class"], ans:2 },
      { q:"True and False are which data type?", options:["String","Integer","Float","Boolean"], ans:3 },
      { type:"fill", q:"Fill in the blank to store the number 10 in a variable called x", code:'x ___ 10', ans:"=" },
    ]
  },
  { id:3, emoji:"🧮", title:"Math & Operators", color:"#4FC78A", level:"Beginner",
    content:`Python can be used like a calculator!\n\n\`\`\`python\nprint(5 + 3)    # 8\nprint(10 - 4)   # 6\nprint(3 * 4)    # 12\nprint(15 / 4)   # 3.75\nprint(15 // 4)  # 3  (floor division)\nprint(15 % 4)   # 3  (remainder)\nprint(2 ** 8)   # 256 (power)\n\`\`\`\n\n**Comparison Operators:**\n\`\`\`python\n5 > 3    # True\n5 == 5   # True\n5 != 3   # True\n5 >= 5   # True\n\`\`\`\n\n**f-strings — mix variables and text:**\n\`\`\`python\nname = "Alice"\nage = 12\nprint(f"My name is {name} and I am {age} years old.")\n\`\`\`\n\n**Compound Assignment Operators (shortcuts!):**\n\`\`\`python\nscore = 0\nscore += 10   # same as: score = score + 10 → 10\nscore -= 3    # same as: score = score - 3  → 7\nscore *= 2    # same as: score = score * 2  → 14\nscore /= 7    # same as: score = score / 7  → 2.0\n\`\`\`\n\nYou'll use \`+=\` all the time in loops to count things!\n\n**Comments — notes for humans:**\n\`\`\`python\n# This is a comment — Python ignores it!\nname = "Alice"  # You can add comments after code too\n\n# Comments help explain WHY your code does something\n# They make your code easier to read later\n\`\`\``,
    tryIt:[
      { after:0, prompt:"Try some math! Calculate 7 * 8 and 100 / 3", starter:'print(7 * 8)\nprint(100 / 3)\nprint(2 ** 10)' },
      { after:2, prompt:"Create an f-string with your own name and age", starter:'name = "___"\nage = ___\nprint(f"My name is {name} and I am {age}")' },
    ],
    quiz:[
      { q:"What does 10 % 3 equal?", options:["3","1","0","3.3"], ans:1 },
      { q:"What does ** mean in Python?", options:["Multiply","Divide","Power/Exponent","Equals"], ans:2 },
      { q:"Which checks if two values are equal?", options:["=","=>","==","!="], ans:2 },
      { type:"output", q:"What does this code print?", code:'x = 5\nx += 3\nprint(x)', ans:"8" },
    ]
  },
  { id:4, emoji:"❓", title:"If / Else Decisions", color:"#B44FF7", level:"Beginner",
    content:`Computers make decisions just like you do! "If it's raining, take an umbrella. Otherwise, wear sunglasses."\n\n\`\`\`python\nage = 15\nif age >= 18:\n    print("You can vote! 🗳️")\nelse:\n    print("Too young to vote. 😅")\n\`\`\`\n\nHere's what happens step by step:\n- Python checks: is \`age >= 18\`? (Is 15 greater than or equal to 18?)\n- The answer is **False**, so Python skips the first \`print\`\n- Python runs the \`else\` block instead and shows: "Too young to vote. 😅"\n\n**elif — for more than 2 choices:**\n\`\`\`python\nscore = 75\nif score >= 90:\n    print("Grade: A 🌟")\nelif score >= 80:\n    print("Grade: B 👍")\nelif score >= 70:\n    print("Grade: C 😊")\nelse:\n    print("Grade: F 😢")\n\`\`\`\n\n\`elif\` means "else if" — Python checks each condition from top to bottom and runs the FIRST one that's True.\n\n⚠️ **Indentation is CRITICAL — always 4 spaces!**\n\nPython uses spaces to know which code "belongs to" which block:\n\`\`\`python\n# ✅ CORRECT — the print is INSIDE the if (4 spaces)\nif age >= 18:\n    print("You can vote!")\n\n# ❌ WRONG — Python will crash with IndentationError!\nif age >= 18:\nprint("You can vote!")\n\`\`\`\n\nThink of it like a to-do list — the indented lines are "sub-items" that belong to the line above.\n\n**Logical Operators — combining conditions:**\n\n\`and\` — BOTH must be true:\n\`\`\`python\nage = 15\nif age >= 13 and age <= 19:\n    print("You're a teenager! 🎒")\n\`\`\`\n\n\`or\` — at least ONE must be true:\n\`\`\`python\nday = "Saturday"\nif day == "Saturday" or day == "Sunday":\n    print("It's the weekend! 🎉")\n\`\`\`\n\n\`not\` — flips True to False (and False to True):\n\`\`\`python\nis_raining = False\nif not is_raining:\n    print("No rain — go outside! ☀️")\n\`\`\`\n\n**Comparison cheat sheet:**\n- \`==\` means "is equal to" (two equals signs!)\n- \`!=\` means "is NOT equal to"\n- \`>\` means "greater than"\n- \`<\` means "less than"\n- \`>=\` means "greater than OR equal to"\n- \`<=\` means "less than OR equal to"`,
    tryIt:[
      { after:0, prompt:"Change the age to 20 and see what happens!", starter:'age = 20\nif age >= 18:\n    print("You can vote!")\nelse:\n    print("Too young to vote")' },
      { after:4, prompt:"Write an if statement that checks if a number is positive, negative, or zero", starter:'number = -5\nif number > 0:\n    print("Positive")\nelif number == 0:\n    print("Zero")\nelse:\n    print("Negative")' },
    ],
    quiz:[
      { q:"What keyword do you use for 'otherwise'?", options:["elif","else","or","not"], ans:1 },
      { q:"How many spaces for indentation in Python?", options:["2","3","4","8"], ans:2 },
      { q:"What does 'and' require?", options:["One condition true","Both conditions true","No conditions","Either or"], ans:1 },
      { type:"output", q:"What does this code print?", code:'x = 10\nif x > 5 and x < 20:\n    print("yes")\nelse:\n    print("no")', ans:"yes" },
    ]
  },
  { id:5, emoji:"🔁", title:"Loops", color:"#F7C84F", level:"Intermediate",
    content:`Loops let you repeat code without writing it over and over! Instead of writing \`print()\` 100 times, you use a loop.\n\n**For Loop — repeat something a set number of times:**\n\`\`\`python\nfor i in range(5):\n    print(i)\n\`\`\`\n\nLet's break this down — it's simpler than it looks:\n- \`range(5)\` creates a sequence of numbers: **0, 1, 2, 3, 4** (it starts at 0 and stops BEFORE 5)\n- \`i\` is a variable that takes each number one at a time (you can name it anything — \`i\` is just common)\n- The indented code runs once for EACH number\n- So this prints: 0, then 1, then 2, then 3, then 4\n\n**Why does range(5) give 0-4 and not 1-5?** Python counts from 0, not 1. It's weird at first but you'll get used to it!\n\n**range() with more control:**\n\`\`\`python\nrange(5)        # 0, 1, 2, 3, 4 (just the stop number)\nrange(1, 6)     # 1, 2, 3, 4, 5 (start at 1, stop before 6)\nrange(0, 10, 2) # 0, 2, 4, 6, 8 (start, stop, count by 2s)\n\`\`\`\n\nThink of it as: **range(start, stop_before, step_size)**\n\n**Looping through a list:**\n\`\`\`python\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n# apple, banana, cherry (one per line)\n\`\`\`\n\n**While Loop — repeat WHILE something is true:**\n\`\`\`python\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1    # IMPORTANT: add 1 each time!\n\`\`\`\n\n⚠️ **WARNING:** If you forget \`count += 1\`, the loop runs FOREVER because \`count\` stays at 0 and \`0 < 5\` is always True! This is called an **infinite loop**. If it happens, press Ctrl+C to stop it.\n\n**break — stop the loop early:**\n\`\`\`python\nfor i in range(10):\n    if i == 5:\n        break       # STOP! Exit the loop completely\n    print(i)\n# Prints: 0, 1, 2, 3, 4 (stops before 5)\n\`\`\`\n\n**continue — skip this round, keep going:**\n\`\`\`python\nfor i in range(5):\n    if i == 2:\n        continue    # Skip this one, go to next\n    print(i)\n# Prints: 0, 1, 3, 4 (skips 2!)\n\`\`\``,
    tryIt:[
      { after:1, prompt:"Print numbers 0 to 4 using a for loop!", starter:'for i in range(5):\n    print(i)' },
      { after:5, prompt:"Write a while loop that counts from 1 to 5", starter:'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1' },
    ],
    quiz:[
      { q:"What does range(3) produce?", options:["1,2,3","0,1,2","0,1,2,3","1,2"], ans:1 },
      { q:"Which loop runs WHILE a condition is true?", options:["for loop","while loop","if loop","range loop"], ans:1 },
      { q:"What does 'break' do in a loop?", options:["Continues to next","Stops the loop","Restarts the loop","Nothing"], ans:1 },
      { type:"output", q:"What does this code print?", code:'for i in range(3):\n    print(i)', ans:"0\n1\n2" },
    ]
  },
  { id:6, emoji:"📋", title:"Lists & Collections", color:"#4FF7E8", level:"Intermediate",
    content:`A **list** is like a shopping list — it stores multiple items in one place!\n\n\`\`\`python\nfruits = ["apple", "banana", "cherry"]\nprint(fruits)  # ['apple', 'banana', 'cherry']\n\`\`\`\n\n**Accessing items — Python counts from 0, not 1!**\n\`\`\`python\nprint(fruits[0])   # apple  (first item)\nprint(fruits[1])   # banana (second item)\nprint(fruits[2])   # cherry (third item)\nprint(fruits[-1])  # cherry (last item — negative counts from the end!)\n\`\`\`\n\n**Changing your list:**\n\`\`\`python\nfruits.append("mango")  # Add to the END → ['apple','banana','cherry','mango']\nfruits.remove("banana") # Remove this item → ['apple','cherry','mango']\nfruits.sort()           # Put in alphabetical order → ['apple','cherry','mango']\nprint(len(fruits))      # Count items → 3\n\`\`\`\n\n**Dictionaries — like a real dictionary!**\n\nA dictionary stores data in **key: value** pairs. Think of it like a phone book: the name is the key, the phone number is the value.\n\`\`\`python\nperson = {\n    "name": "Alice",\n    "age": 12,\n    "city": "Cape Town"\n}\nprint(person["name"])  # Alice\nprint(person["age"])   # 12\n\`\`\`\n\n**Looping Through Dictionaries:**\n\`\`\`python\nfor key, value in person.items():\n    print(f"{key}: {value}")\n# name: Alice\n# age: 12\n# city: Cape Town\n\`\`\`\n\n\`.items()\` gives you BOTH the key and value at the same time. You can also use:\n- \`.keys()\` — just the keys (name, age, city)\n- \`.values()\` — just the values (Alice, 12, Cape Town)\n\n**Finding the highest value in a dictionary:**\n\`\`\`python\ngrades = {"Alice": 92, "Bob": 78, "Charlie": 85}\n\n# max() finds the biggest. key=grades.get tells it\n# to compare by the VALUES (scores), not the names\nbest = max(grades, key=grades.get)\nprint(f"Top student: {best}")  # Alice (she has 92)\n\`\`\`\n\n**One-Line If (Ternary) — a shortcut:**\n\nInstead of writing 4 lines of if/else, you can do it in 1:\n\`\`\`python\nage = 15\n\n# The long way:\nif age >= 18:\n    status = "adult"\nelse:\n    status = "minor"\n\n# The shortcut (does the same thing!):\nstatus = "adult" if age >= 18 else "minor"\nprint(status)  # minor\n\`\`\``,
    tryIt:[
      { after:1, prompt:"Create a list of 3 fruits and print the first and last!", starter:'fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])\nprint(fruits[-1])' },
      { after:3, prompt:"Create a dictionary about yourself and loop through it!", starter:'me = {"name": "___", "age": ___, "city": "___"}\nfor key, value in me.items():\n    print(f"{key}: {value}")' },
    ],
    quiz:[
      { q:"What index is the FIRST item in a list?", options:["1","-1","0","first"], ans:2 },
      { q:"Which method adds an item to a list?", options:["add()","insert()","append()","push()"], ans:2 },
      { q:"What stores key-value pairs in Python?", options:["List","Tuple","Set","Dictionary"], ans:3 },
      { type:"fill", q:"Fill in the blank to add 'mango' to the fruits list", code:'fruits.___("mango")', ans:"append" },
    ]
  },
  { id:7, emoji:"⚙️", title:"Functions", color:"#F74F4F", level:"Intermediate",
    content:`A **function** is a reusable recipe. You write the instructions once, then use them whenever you need — like saving a recipe instead of memorizing it every time.\n\n**Creating (defining) a function:**\n\`\`\`python\ndef greet():\n    print("Hello there!")\n\`\`\`\n\n- \`def\` means "define" — you're creating a new command\n- \`greet\` is the name you give your function\n- The \`():\` and indented code below are the instructions\n\n**Calling (using) a function:**\n\`\`\`python\ngreet()   # Shows: Hello there!\ngreet()   # Shows: Hello there! (you can use it as many times as you want!)\n\`\`\`\n\n**Parameters — giving your function information:**\n\nA parameter is a placeholder. Think of it as a blank space that gets filled in when you call the function:\n\`\`\`python\ndef greet(name):          # 'name' is a placeholder\n    print(f"Hello, {name}!")\n\ngreet("Alice")   # name becomes "Alice" → Hello, Alice!\ngreet("Bob")     # name becomes "Bob"   → Hello, Bob!\n\`\`\`\n\nYou can have multiple parameters:\n\`\`\`python\ndef introduce(name, age):\n    print(f"I'm {name} and I'm {age} years old")\n\nintroduce("Alice", 20)  # I'm Alice and I'm 20 years old\n\`\`\`\n\n**Return vs Print — the BIG difference:**\n\n\`print()\` just SHOWS something on screen. \`return\` SENDS a value BACK so you can use it later:\n\`\`\`python\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # result now holds 8\nprint(result)       # NOW we show it: 8\nprint(result * 2)   # We can use it! Shows: 16\n\`\`\`\n\nWithout \`return\`, you can't save or reuse the answer:\n\`\`\`python\ndef add_bad(a, b):\n    print(a + b)      # just shows 8, but doesn't give it back\n\nresult = add_bad(5, 3)  # result is None (empty!) because nothing was returned\n\`\`\`\n\n**Default parameters — backup values:**\n\`\`\`python\ndef greet(name="stranger"):\n    print(f"Hello, {name}!")\n\ngreet()        # Hello, stranger! (uses the default)\ngreet("Alice") # Hello, Alice! (uses what you gave it)\n\`\`\``,
    tryIt:[
      { after:1, prompt:"Create a function called say_hello that prints a greeting!", starter:'def say_hello(name):\n    print(f"Hello, {name}!")\n\nsay_hello("Alice")\nsay_hello("Bob")' },
      { after:3, prompt:"Create an add function that RETURNS the sum of two numbers", starter:'def add(a, b):\n    return a + b\n\nresult = add(10, 5)\nprint(result)' },
    ],
    quiz:[
      { q:"What keyword defines a function?", options:["func","define","def","function"], ans:2 },
      { q:"What does 'return' do in a function?", options:["Stops the program","Sends a value back","Prints output","Loops"], ans:1 },
      { q:"Can a function have default parameter values?", options:["No","Yes","Only in Python 3","Only numbers"], ans:1 },
      { type:"output", q:"What does this code print?", code:'def double(x):\n    return x * 2\n\nprint(double(7))', ans:"14" },
    ]
  },
  { id:8, emoji:"🚨", title:"Error Handling", color:"#F79A4F", level:"Advanced",
    content:`**Why do we need error handling?** Without it, ONE mistake crashes your entire program. With error handling, your program can deal with problems and keep running!\n\nImagine asking a user to type a number, and they type "hello" instead. Without error handling → CRASH. With it → you can say "That's not a number, try again."\n\n**try / except — the safety net:**\n\`\`\`python\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Can't divide by zero!")\n\`\`\`\n\nHere's what happens:\n- Python TRIES to run the code inside \`try\`\n- If something goes wrong, Python CATCHES the error in \`except\`\n- Instead of crashing, it runs the \`except\` code instead\n\n**A real-world example:**\n\`\`\`python\ntry:\n    age = int(input("Enter your age: "))\n    print(f"You are {age} years old!")\nexcept ValueError:\n    print("That's not a number! Please type a number.")\n\`\`\`\n\n**finally — code that ALWAYS runs, no matter what:**\n\`\`\`python\ntry:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Can't divide by zero!")\nfinally:\n    print("This always runs!")  # Runs whether there was an error or not\n\`\`\`\n\n**Catching different errors:**\n\`\`\`python\ntry:\n    numbers = [1, 2, 3]\n    print(numbers[10])    # IndexError — index too big!\nexcept IndexError:\n    print("That index doesn't exist!")\nexcept ValueError:\n    print("Wrong type of value!")\n\`\`\`\n\n**Common Error Types:**\n\n| Error | What went wrong | Example |\n|-------|-----------------|---------|\n| SyntaxError | Code is written wrong | Missing colon or bracket |\n| NameError | Variable doesn't exist | Using \`x\` before creating it |\n| TypeError | Wrong data type used | Adding a number + text |\n| IndexError | List index too big | \`lst[99]\` on a 3-item list |\n| ValueError | Wrong value given | \`int("hello")\` |\n| ZeroDivisionError | Divide by zero | \`10 / 0\` |`,
    tryIt:[
      { after:2, prompt:"Try dividing by zero WITH and WITHOUT try/except!", starter:'# This is SAFE:\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Caught it!")\n\nprint("Program keeps running!")' },
    ],
    quiz:[
      { q:"What keyword starts error handling?", options:["catch","try","error","safe"], ans:1 },
      { q:"What error happens with 10 / 0?", options:["ValueError","SyntaxError","ZeroDivisionError","TypeError"], ans:2 },
      { q:"When does 'finally' block run?", options:["Only on error","Only on success","Always","Never"], ans:2 },
      { type:"fill", q:"Fill in the blank to catch any ValueError", code:'try:\n    x = int("hello")\nexcept ___:\n    print("Not a number!")', ans:"ValueError" },
    ]
  },
  { id:9, emoji:"🔤", title:"Strings & Text", color:"#E84FAF", level:"Intermediate",
    content:`Strings are one of the most common data types — let's master them!\n\n**String Concatenation (joining strings):**\n\`\`\`python\nfirst = "Hello"\nsecond = "World"\nresult = first + " " + second\nprint(result)  # Hello World\n\`\`\`\n\n**String Length:**\n\`\`\`python\nmessage = "Python"\nprint(len(message))  # 6\n\`\`\`\n\n**Looping Through a String:**\n\nYou can loop through each character one by one:\n\`\`\`python\nfor char in "Hello":\n    print(char)\n# H, e, l, l, o (one per line)\n\`\`\`\n\n**The \`in\` Operator — Check If Text Exists:**\n\`\`\`python\nprint("a" in "apple")   # True\nprint("z" in "apple")   # False\nprint("hell" in "hello") # True\n\`\`\`\n\nThis is super useful for searching inside strings!\n\n**String Slicing — Grab Parts of a String:**\n\`\`\`python\nword = "Python"\nprint(word[0])     # P (first character)\nprint(word[0:3])   # Pyt (index 0 to 2)\nprint(word[2:])    # thon (index 2 to end)\nprint(word[::-1])  # nohtyP (REVERSED!)\n\`\`\`\n\n\`[::-1]\` reverses any string — this is a Python superpower! 🦸\n\n**Useful String Methods:**\n\`\`\`python\nmsg = "  Hello World  "\nprint(msg.upper())        # "  HELLO WORLD  "\nprint(msg.lower())        # "  hello world  "\nprint(msg.strip())        # "Hello World" (removes spaces)\nprint(msg.replace("World", "Python"))  # "  Hello Python  "\nprint(msg.count("l"))     # 3\nprint(msg.split())        # ["Hello", "World"]\n\`\`\`\n\n**Putting It Together — Count Vowels:**\n\`\`\`python\ndef count_vowels(text):\n    count = 0\n    for char in text.lower():\n        if char in "aeiou":\n            count += 1\n    return count\n\nprint(count_vowels("Hello World"))  # 3\n\`\`\`\n\nNotice how we used: looping through a string, the \`in\` operator, and \`+=\` all together!`,
    tryIt:[
      { after:1, prompt:"Try joining two strings and checking their length!", starter:'first = "Hello"\nsecond = "World"\nresult = first + " " + second\nprint(result)\nprint(len(result))' },
      { after:4, prompt:"Reverse your name using slicing!", starter:'name = "Your Name"\nprint(name[::-1])' },
    ],
    quiz:[
      { q:'What does "hello"[::-1] return?', options:['"hello"','"olleh"','"h"','"o"'], ans:1 },
      { q:'What does "a" in "apple" return?', options:["True","False",'"a"',"Error"], ans:0 },
      { q:'What does "Hello World".split() return?', options:['"Hello World"','["Hello", "World"]','"HelloWorld"','["H","e","l","l","o"...]'], ans:1 },
      { type:"output", q:"What does this code print?", code:'word = "Python"\nprint(word[0:3])', ans:"Pyt" },
    ]
  },
  { id:10, emoji:"📎", title:"Tuples & Sets", color:"#7B68EE", level:"Intermediate",
    content:`Python has more collection types besides lists and dictionaries. Let's learn **tuples** and **sets**!\n\n**Tuples — lists that can't be changed:**\n\nA tuple looks like a list, but uses round brackets \`()\` instead of square brackets \`[]\`:\n\`\`\`python\ncoordinates = (10, 20)\ncolors = ("red", "green", "blue")\n\`\`\`\n\nThe big difference? **You can't change a tuple after creating it!**\n\`\`\`python\ncolors = ("red", "green", "blue")\nprint(colors[0])      # red (accessing works the same!)\nprint(len(colors))    # 3\n\n# colors[0] = "yellow"  # ❌ ERROR! Tuples can't be changed!\n\`\`\`\n\n**When do you use tuples?** When the data should NEVER change — like days of the week, coordinates, or RGB colors.\n\n**Unpacking tuples — grab values easily:**\n\`\`\`python\nperson = ("Alice", 20, "Cape Town")\nname, age, city = person    # Each variable gets one value!\nprint(name)  # Alice\nprint(age)   # 20\nprint(city)  # Cape Town\n\`\`\`\n\n**Sets — collections with NO duplicates:**\n\nA set is like a bag of unique items. If you try to add a duplicate, it gets ignored:\n\`\`\`python\nnumbers = {1, 2, 3, 3, 3}\nprint(numbers)  # {1, 2, 3} — duplicates removed!\n\`\`\`\n\n**Useful set operations:**\n\`\`\`python\nfruits = {"apple", "banana", "cherry"}\nfruits.add("mango")       # Add an item\nfruits.remove("banana")   # Remove an item\nprint("apple" in fruits)  # True — check if item exists\n\`\`\`\n\n**Sets are great for removing duplicates from a list:**\n\`\`\`python\nnames = ["Alice", "Bob", "Alice", "Charlie", "Bob"]\nunique_names = set(names)\nprint(unique_names)  # {'Alice', 'Bob', 'Charlie'}\n# Back to a list if needed:\nunique_list = list(unique_names)\n\`\`\`\n\n**Quick comparison:**\n\n| Collection | Syntax | Ordered? | Changeable? | Duplicates? |\n|------------|--------|----------|-------------|-------------|\n| List | [1,2,3] | Yes | Yes | Yes |\n| Tuple | (1,2,3) | Yes | No | Yes |\n| Set | {1,2,3} | No | Yes | No |\n| Dictionary | {"a":1} | Yes | Yes | No (keys) |`,
    tryIt:[
      { after:2, prompt:"Create a tuple and try unpacking it into variables!", starter:'person = ("Alice", 20, "Cape Town")\nname, age, city = person\nprint(name)\nprint(age)\nprint(city)' },
      { after:4, prompt:"Use a set to remove duplicates from a list!", starter:'numbers = [1, 2, 2, 3, 3, 3, 4]\nunique = set(numbers)\nprint(unique)' },
    ],
    quiz:[
      { q:"What brackets do tuples use?", options:["[]","()","{}","<>"], ans:1 },
      { q:"What happens when you add a duplicate to a set?", options:["Error","It's added twice","It's ignored","Set is cleared"], ans:2 },
      { q:"Can you change a tuple after creating it?", options:["Yes","No","Only the first item","Only with .change()"], ans:1 },
      { type:"output", q:"What does this code print?", code:'x = (10, 20, 30)\nprint(x[1])', ans:"20" },
    ]
  },
  { id:11, emoji:"⚡", title:"List Comprehensions", color:"#FF6B6B", level:"Intermediate",
    content:`List comprehensions are a **shortcut** for creating lists. Instead of writing a loop with 3-4 lines, you can do it in ONE line!\n\n**The long way (what you already know):**\n\`\`\`python\nsquares = []\nfor i in range(5):\n    squares.append(i * i)\nprint(squares)  # [0, 1, 4, 9, 16]\n\`\`\`\n\n**The shortcut (list comprehension):**\n\`\`\`python\nsquares = [i * i for i in range(5)]\nprint(squares)  # [0, 1, 4, 9, 16]\n\`\`\`\n\nSame result, ONE line! 🎉\n\n**How to read it:** "Give me \`i * i\` FOR EACH \`i\` IN \`range(5)\`"\n\n**The pattern is:** \`[what_you_want for variable in sequence]\`\n\n**More examples:**\n\`\`\`python\n# Double every number\ndoubles = [x * 2 for x in range(6)]\nprint(doubles)  # [0, 2, 4, 6, 8, 10]\n\n# Make everything uppercase\nnames = ["alice", "bob", "charlie"]\nupper = [name.upper() for name in names]\nprint(upper)  # ['ALICE', 'BOB', 'CHARLIE']\n\`\`\`\n\n**Adding a condition (filter):**\n\nYou can add \`if\` at the end to only include certain items:\n\`\`\`python\n# Only even numbers\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]\n\n# Only words longer than 3 letters\nwords = ["hi", "hello", "hey", "howdy"]\nlong_words = [w for w in words if len(w) > 3]\nprint(long_words)  # ['hello', 'howdy']\n\`\`\`\n\n**When to use list comprehensions:**\n- ✅ Simple transformations (double, uppercase, filter)\n- ❌ Complex logic with multiple steps (use a regular loop instead — clarity matters!)`,
    tryIt:[
      { after:1, prompt:"Create a list of cubes (x^3) for numbers 1 to 5!", starter:'cubes = [x ** 3 for x in range(1, 6)]\nprint(cubes)' },
      { after:2, prompt:"Use a list comprehension to get only the even numbers from 1-20", starter:'evens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)' },
    ],
    quiz:[
      { q:"What does [x*2 for x in range(4)] produce?", options:["[2,4,6,8]","[0,2,4,6]","[1,2,3,4]","[0,1,2,3]"], ans:1 },
      { q:"What keyword adds a filter to a list comprehension?", options:["filter","where","if","when"], ans:2 },
      { q:"List comprehensions are a shortcut for…", options:["Dictionaries","While loops","For loops with append","Functions"], ans:2 },
      { type:"output", q:"What does this code print?", code:'result = [x for x in range(6) if x > 3]\nprint(result)', ans:"[4, 5]" },
    ]
  },
  { id:12, emoji:"📦", title:"Modules & Imports", color:"#20B2AA", level:"Intermediate",
    content:`A **module** is a file full of pre-written code that someone else (or you!) already created. Instead of writing everything from scratch, you **import** it and use it!\n\nThink of it like apps on your phone — you don't build a calculator app, you just download and use one.\n\n**Importing a built-in module:**\n\`\`\`python\nimport math\n\nprint(math.sqrt(16))    # 4.0 (square root)\nprint(math.pi)          # 3.14159...\nprint(math.floor(3.7))  # 3 (round down)\nprint(math.ceil(3.2))   # 4 (round up)\n\`\`\`\n\n\`math\` is a module that comes WITH Python — you just need to import it!\n\n**Import just what you need:**\n\`\`\`python\nfrom math import sqrt, pi\n\nprint(sqrt(25))   # 5.0 (no need to write math.sqrt!)\nprint(pi)         # 3.14159...\n\`\`\`\n\n**Other useful built-in modules:**\n\`\`\`python\nimport random\nprint(random.randint(1, 10))    # Random number between 1 and 10\nprint(random.choice(["a","b","c"]))  # Pick a random item\n\nimport datetime\ntoday = datetime.date.today()\nprint(today)  # 2024-03-15 (today's date)\n\`\`\`\n\n**Giving a module a nickname (alias):**\n\`\`\`python\nimport random as r\nprint(r.randint(1, 100))  # Shorter to type!\n\`\`\`\n\n**Creating your OWN module:**\n\nAny Python file can be a module! Say you create a file called \`helpers.py\`:\n\`\`\`python\n# helpers.py\ndef greet(name):\n    return f"Hello, {name}!"\n\ndef add(a, b):\n    return a + b\n\`\`\`\n\nNow in another file, you can use it:\n\`\`\`python\n# main.py\nimport helpers\n\nprint(helpers.greet("Alice"))  # Hello, Alice!\nprint(helpers.add(5, 3))       # 8\n\`\`\`\n\n**Installing external modules with pip:**\n\`\`\`python\n# In your terminal (not in Python!):\npip install requests\n\n# Then in your Python code:\nimport requests\n\`\`\``,
    tryIt:[
      { after:0, prompt:"Try importing math and calculating a square root!", starter:'import math\nprint(math.sqrt(144))\nprint(math.pi)' },
      { after:2, prompt:"Try using the random module to pick a random number!", starter:'import random\nprint(random.randint(1, 100))' },
    ],
    quiz:[
      { q:"What keyword brings in a module?", options:["use","include","import","require"], ans:2 },
      { q:"What does 'from math import sqrt' do?", options:["Imports the whole math module","Imports only the sqrt function","Creates a new math module","Deletes sqrt"], ans:1 },
      { q:"What command installs external modules?", options:["python install","import install","pip install","module install"], ans:2 },
      { type:"fill", q:"Fill in the blank to import the math module", code:'___ math', ans:"import" },
    ]
  },
  { id:13, emoji:"📁", title:"File Handling", color:"#DAA520", level:"Advanced",
    content:`Python can read and write files on your computer! This is how real programs save data.\n\n**Writing to a file:**\n\`\`\`python\nfile = open("hello.txt", "w")  # "w" = write mode\nfile.write("Hello, World!\\n")\nfile.write("Python is fun!")\nfile.close()  # Always close when done!\n\`\`\`\n\nThis creates a file called \`hello.txt\` with two lines of text. The \`\\n\` means "new line".\n\n**Reading from a file:**\n\`\`\`python\nfile = open("hello.txt", "r")  # "r" = read mode\ncontent = file.read()\nprint(content)\nfile.close()\n# Shows:\n# Hello, World!\n# Python is fun!\n\`\`\`\n\n**The better way — using \`with\` (auto-closes!):**\n\nForgetting \`file.close()\` can cause problems. The \`with\` keyword handles it for you:\n\`\`\`python\n# Writing\nwith open("notes.txt", "w") as file:\n    file.write("Line 1\\n")\n    file.write("Line 2\\n")\n# File automatically closes here!\n\n# Reading\nwith open("notes.txt", "r") as file:\n    content = file.read()\n    print(content)\n\`\`\`\n\n**Reading line by line:**\n\`\`\`python\nwith open("notes.txt", "r") as file:\n    for line in file:\n        print(line.strip())  # .strip() removes extra blank lines\n\`\`\`\n\n**Appending (adding to the end, not overwriting):**\n\`\`\`python\nwith open("notes.txt", "a") as file:  # "a" = append mode\n    file.write("Line 3\\n")\n# Adds Line 3 to the END without deleting what was there!\n\`\`\`\n\n**File mode cheat sheet:**\n\n| Mode | What it does |\n|------|--------------|\n| "r" | Read (file must exist) |\n| "w" | Write (creates new file, erases old content!) |\n| "a" | Append (adds to end, keeps old content) |\n| "r+" | Read AND write |\n\n⚠️ **Warning:** \`"w"\` mode **erases everything** in the file! Use \`"a"\` if you want to add to it.`,
    tryIt:[
      { after:2, prompt:"Try writing to a file and reading it back!", starter:'# Write\nwith open("test.txt", "w") as f:\n    f.write("Hello from Python!")\n\n# Read\nwith open("test.txt", "r") as f:\n    print(f.read())' },
    ],
    quiz:[
      { q:'What mode opens a file for reading?', options:['"w"','"r"','"a"','"read"'], ans:1 },
      { q:"What keyword auto-closes a file?", options:["auto","close","with","using"], ans:2 },
      { q:'What does "a" mode do?', options:["Adds to the end","Erases and writes","Only reads","Creates a backup"], ans:0 },
      { type:"fill", q:'Fill in the blank to open a file for writing', code:'with open("data.txt", ___) as f:', ans:'"w"' },
    ]
  },
  { id:14, emoji:"🏗️", title:"Classes & OOP", color:"#FF69B4", level:"Advanced",
    content:`**OOP** stands for **Object-Oriented Programming**. It's a way of organizing your code around "objects" — things that have **properties** (data) and **actions** (functions).\n\nThink of a class as a **blueprint**, and an object as the **actual thing** built from that blueprint.\n\n🏠 A house blueprint (class) → the actual houses built from it (objects)\n\n**Creating a class:**\n\`\`\`python\nclass Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        print(f"{self.name} says: Woof! 🐕")\n\`\`\`\n\nLet's break this down:\n- \`class Dog:\` creates a blueprint called Dog\n- \`__init__\` is a special function that runs when you CREATE a new Dog (like filling in the details)\n- \`self\` means "this specific dog" — it lets each dog have its OWN name and breed\n- \`self.name = name\` stores the name inside THIS dog\n- \`def bark(self)\` is an action that this dog can do\n\n**Creating objects from the class:**\n\`\`\`python\nmy_dog = Dog("Buddy", "Golden Retriever")\nfriends_dog = Dog("Rex", "German Shepherd")\n\nprint(my_dog.name)       # Buddy\nprint(friends_dog.breed)  # German Shepherd\nmy_dog.bark()            # Buddy says: Woof! 🐕\nfriends_dog.bark()       # Rex says: Woof! 🐕\n\`\`\`\n\nEach dog is its OWN object with its OWN data!\n\n**A more practical example — Student:**\n\`\`\`python\nclass Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n\n    def is_passing(self):\n        return self.grade >= 50\n\n    def display(self):\n        status = "PASS" if self.grade >= 50 else "FAIL"\n        print(f"{self.name}: {self.grade}% ({status})")\n\`\`\`\n\n\`\`\`python\nstudent1 = Student("Alice", 85)\nstudent2 = Student("Bob", 42)\n\nstudent1.display()  # Alice: 85% (PASS)\nstudent2.display()  # Bob: 42% (FAIL)\nprint(student1.is_passing())  # True\n\`\`\`\n\n**Inheritance — one class based on another:**\n\nYou can create a new class that inherits everything from another:\n\`\`\`python\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print(f"{self.name} makes a sound")\n\nclass Cat(Animal):    # Cat inherits from Animal\n    def speak(self):  # Override the parent's method\n        print(f"{self.name} says: Meow! 🐱")\n\nclass Dog(Animal):\n    def speak(self):\n        print(f"{self.name} says: Woof! 🐕")\n\`\`\`\n\n\`\`\`python\ncat = Cat("Whiskers")\ndog = Dog("Buddy")\ncat.speak()  # Whiskers says: Meow! 🐱\ndog.speak()  # Buddy says: Woof! 🐕\n\`\`\`\n\nBoth Cat and Dog got \`self.name\` from Animal automatically!`,
    tryIt:[
      { after:1, prompt:"Create your own Dog class and make two dogs!", starter:'class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    def bark(self):\n        print(f"{self.name} says: Woof!")\n\ndog1 = Dog("Buddy", "Lab")\ndog2 = Dog("Rex", "Poodle")\ndog1.bark()\ndog2.bark()' },
    ],
    quiz:[
      { q:"What is a class in Python?", options:["A variable","A blueprint for objects","A type of loop","A module"], ans:1 },
      { q:"What does __init__ do?", options:["Deletes the object","Prints the object","Sets up the object when created","Imports a module"], ans:2 },
      { q:"What does 'self' refer to?", options:["The class itself","The current object","The parent class","Nothing"], ans:1 },
      { type:"fill", q:"Fill in the blank to create a class called Cat", code:'___ Cat:\n    pass', ans:"class" },
    ]
  },
  { id:15, emoji:"🔄", title:"Recursion", color:"#9370DB", level:"Advanced",
    content:`**Recursion** is when a function calls ITSELF. It sounds weird, but it's a powerful way to solve problems that have smaller versions of themselves inside them.\n\nThink of Russian nesting dolls 🪆 — each doll has a smaller doll inside it until you reach the tiniest one.\n\n**A simple countdown:**\n\`\`\`python\ndef countdown(n):\n    if n <= 0:          # Base case — STOP here!\n        print("Go! 🚀")\n        return\n    print(n)\n    countdown(n - 1)    # Call myself with a smaller number\n\ncountdown(5)\n\`\`\`\n\nThis prints: 5, 4, 3, 2, 1, Go! 🚀\n\nWhat happens step by step:\n- \`countdown(5)\` → prints 5, then calls \`countdown(4)\`\n- \`countdown(4)\` → prints 4, then calls \`countdown(3)\`\n- \`countdown(3)\` → prints 3, then calls \`countdown(2)\`\n- \`countdown(2)\` → prints 2, then calls \`countdown(1)\`\n- \`countdown(1)\` → prints 1, then calls \`countdown(0)\`\n- \`countdown(0)\` → n is 0, so print "Go!" and STOP\n\n⚠️ **Every recursive function MUST have a base case** — that's the condition that tells it to STOP. Without it, the function calls itself forever and crashes!\n\n**The classic: Factorial**\n\nFactorial means: multiply a number by every number below it.\n5! = 5 x 4 x 3 x 2 x 1 = 120\n\n\`\`\`python\ndef factorial(n):\n    if n <= 1:       # Base case\n        return 1\n    return n * factorial(n - 1)  # n times factorial of (n-1)\n\nprint(factorial(5))  # 120\n\`\`\`\n\nHow it works:\n- \`factorial(5)\` = 5 * \`factorial(4)\`\n- \`factorial(4)\` = 4 * \`factorial(3)\`\n- \`factorial(3)\` = 3 * \`factorial(2)\`\n- \`factorial(2)\` = 2 * \`factorial(1)\`\n- \`factorial(1)\` = 1 (base case!)\n- Now it goes BACK UP: 2*1=2, 3*2=6, 4*6=24, 5*24=**120**\n\n**Fibonacci Sequence:**\n\nEach number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13...\n\`\`\`python\ndef fibonacci(n):\n    if n <= 0:\n        return 0\n    if n == 1:\n        return 1\n    return fibonacci(n-1) + fibonacci(n-2)\n\nfor i in range(8):\n    print(fibonacci(i), end=" ")\n# 0 1 1 2 3 5 8 13\n\`\`\`\n\n**Recursion vs Loops:**\n- Anything recursion can do, a loop can do too (and vice versa)\n- Recursion is cleaner for problems that are naturally "nested" (trees, folders, fractals)\n- Loops are usually faster and simpler for counting\n- University exams LOVE testing recursion — practice tracing through each step!`,
    tryIt:[
      { after:0, prompt:"Try the countdown function — change the starting number!", starter:'def countdown(n):\n    if n <= 0:\n        print("Go!")\n        return\n    print(n)\n    countdown(n - 1)\n\ncountdown(5)' },
      { after:1, prompt:"Try calculating factorials!", starter:'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))\nprint(factorial(10))' },
    ],
    quiz:[
      { q:"What is the 'base case' in recursion?", options:["The first call","The condition that stops the recursion","The largest input","The return value"], ans:1 },
      { q:"What happens without a base case?", options:["Nothing","The function runs forever (crash!)","It returns 0","It skips the function"], ans:1 },
      { q:"What is 4! (4 factorial)?", options:["4","8","16","24"], ans:3 },
      { type:"output", q:"What does this code print?", code:'def f(n):\n    if n <= 1: return 1\n    return n * f(n-1)\nprint(f(3))', ans:"6" },
    ]
  },
];
