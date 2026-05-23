import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Fix nested transitions that might have been broken by simple replace
content = re.sub(r'transition=\{\{\s*\.\.\.springTransition,\s*delay:\s*([0-9.]+)\s*\}\}', r'transition={{ ...springTransition, delay: \1 }}', content)

# Make sure we didn't mess up Framer Motion `transition={{ duration: 0.5 }}` which was just added for random text
content = content.replace(
"""<motion.span
                  key={randomText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={springTransition}
                >""",
"""<motion.span
                  key={randomText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >"""
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Fixed")
