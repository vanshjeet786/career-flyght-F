import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Add random text logic and background
import_statement = 'import { useState, useEffect } from "react";\n'
if import_statement not in content:
    content = content.replace('import { useRef } from "react";', 'import { useRef, useState, useEffect } from "react";')

random_text_logic = """
  const [randomText, setRandomText] = useState("Construct");
  const words = ["Construct", "Elevate", "Optimize", "Analyze", "Design"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomText(words[Math.floor(Math.random() * words.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const springTransition = { type: "spring", stiffness: 300, damping: 45 };
"""

content = content.replace('const containerRef = useRef(null);', random_text_logic + '\n  const containerRef = useRef(null);')

# Replace the text
content = content.replace(
"""<h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
                Construct <br/> your legacy.
              </h1>""",
"""<h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6 flex flex-col">
                <motion.span
                  key={randomText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {randomText}
                </motion.span>
                <span>your legacy.</span>
              </h1>"""
)

# Update transitions to use springTransition
content = re.sub(r'transition=\{\{ duration: [0-9.]+ \}\}', 'transition={springTransition}', content)
content = re.sub(r'transition=\{\{ duration: [0-9.]+, delay: ([0-9.]+) \}\}', r'transition={{ ...springTransition, delay: \1 }}', content)

# Background fade
content = content.replace(
  '<div className="flex flex-col gap-32 pb-32" ref={containerRef}>',
  '<div className="flex flex-col gap-32 pb-32 relative" ref={containerRef}>\n      {/* Dynamic Grid Background */}\n      <div className="absolute inset-0 z-[-1] min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>'
)


with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Done")
