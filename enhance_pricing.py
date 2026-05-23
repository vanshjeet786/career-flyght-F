import re

with open('src/app/pricing/page.tsx', 'r') as f:
    content = f.read()

# Add framer motion
if 'import { motion } from "framer-motion"' not in content:
    content = content.replace('import { CheckCircle2, X } from "lucide-react";', 'import { CheckCircle2, X } from "lucide-react";\nimport { motion } from "framer-motion";\nimport { useState } from "react";')

content = content.replace('export default function PricingPage() {\n  return (', 'export default function PricingPage() {\n  const [annual, setAnnual] = useState(true);\n  return (')


# Add toggle
toggle_html = """
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!annual ? "text-black dark:text-white" : "text-gray-500"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 rounded-full bg-black dark:bg-white flex items-center p-1 cursor-pointer transition-colors"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-6 h-6 bg-white dark:bg-black rounded-full"
              style={{ marginLeft: annual ? "auto" : "0" }}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-black dark:text-white" : "text-gray-500"}`}>
            Annually <span className="text-green-500 text-xs font-bold ml-1">Save 20%</span>
          </span>
        </div>
"""

content = content.replace('<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">', toggle_html + '<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">')

# Update prices
content = content.replace('<div className="text-5xl font-bold mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>', '<div className="text-5xl font-bold mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>')
content = content.replace('<div className="text-5xl font-bold mb-6">$15<span className="text-lg text-gray-500 font-normal">/mo</span></div>', '<div className="text-5xl font-bold mb-6">${annual ? "12" : "15"}<span className="text-lg text-gray-500 font-normal">/mo</span></div>')
content = content.replace('<div className="text-5xl font-bold mb-6">$49<span className="text-lg text-gray-500 font-normal">/mo</span></div>', '<div className="text-5xl font-bold mb-6">${annual ? "39" : "49"}<span className="text-lg text-gray-500 font-normal">/mo</span></div>')

# Hover animations on cards
content = content.replace('      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">', '      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col">')
content = content.replace('        </button>\n      </div>', '        </button>\n      </motion.div>')

content = content.replace('      <div className="bg-[#E3FF73] rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">', '      <motion.div whileHover={{ scale: 1.02, y: -20 }} transition={{ type: "spring", stiffness: 300, damping: 45 }} className="bg-[#E3FF73] rounded-3xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">')

with open('src/app/pricing/page.tsx', 'w') as f:
    f.write(content)

print("Enhanced pricing")
