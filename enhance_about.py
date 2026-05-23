import re

with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

# Add framer motion
if 'import { motion } from "framer-motion"' not in content:
    content = content.replace('export default function AboutPage() {', 'import { motion } from "framer-motion";\nexport default function AboutPage() {')

# Add scroll animations
content = content.replace(
"""        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">1</div>""",
"""        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">1</div>"""
)

content = content.replace(
"""        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">2</div>""",
"""        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">2</div>"""
)

content = content.replace(
"""        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">3</div>""",
"""        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 bg-[#E3FF73] rounded-xl flex items-center justify-center font-bold text-xl text-black mb-6">3</div>"""
)

# Close motion.divs
content = content.replace('          </p>\n        </div>\n      </div>', '          </p>\n        </motion.div>\n      </div>')
content = content.replace('          </p>\n        </div>\n\n        <motion.div', '          </p>\n        </motion.div>\n\n        <motion.div')

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)

print("Enhanced about")
