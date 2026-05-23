import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Fix the type for springTransition
content = content.replace(
    'const springTransition = { type: "spring", stiffness: 300, damping: 45 };',
    'const springTransition = { type: "spring" as const, stiffness: 300, damping: 45 };'
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Fixed")
