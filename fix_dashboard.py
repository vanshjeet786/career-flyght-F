import re

with open('src/app/dashboard/page.tsx', 'r') as f:
    content = f.read()

# Fix the grid tag
content = content.replace('      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[700px]">', '      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[700px]">')
content = content.replace('        </div>\n\n      </motion.div>\n    </motion.div>', '        </div>\n\n      </div>\n    </motion.div>')

with open('src/app/dashboard/page.tsx', 'w') as f:
    f.write(content)

print("Fixed dashboard")
