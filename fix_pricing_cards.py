import re

with open('src/app/pricing/page.tsx', 'r') as f:
    content = f.read()

# Make sure we didn't miss closing tags
content = content.replace('      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">', '      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">')
content = content.replace('      <motion.div whileHover={{ scale: 1.02, y: -20 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-[#E3FF73] rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">', '      <motion.div whileHover={{ scale: 1.02, y: -20 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-[#E3FF73] rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">')


# Close the middle one properly
content = content.replace('        </button>\n      </motion.div>\n\n      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">', '        </button>\n      </motion.div>\n\n      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">')


with open('src/app/pricing/page.tsx', 'w') as f:
    f.write(content)

print("Fixed pricing cards")
