import re

with open('src/app/profile/page.tsx', 'r') as f:
    content = f.read()

# Fix buttons that were incorrectly matched
content = content.replace('             </motion.button>\n             <button', '             </button>\n             <button')
content = content.replace('             </motion.button>\n          </div>', '             </button>\n          </div>')

with open('src/app/profile/page.tsx', 'w') as f:
    f.write(content)

print("Fixed profile")
