import re

with open('src/app/dashboard/page.tsx', 'r') as f:
    content = f.read()

# Add framer motion import
if 'import { motion } from "framer-motion"' not in content:
    content = content.replace('import { BarChart, Clock', 'import { motion } from "framer-motion";\nimport { BarChart, Clock')


# Replace return with motion
content = content.replace(
"""  return (
    <div className="flex flex-col gap-8 h-full">""",
"""  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 45 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 h-full"
    >"""
)

content = content.replace('      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">', '      <motion.div variants={item} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">')
content = content.replace('      </div>\n\n      {/* Overview Cards */}', '      </motion.div>\n\n      {/* Overview Cards */}')


# Cards
content = content.replace('      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">', '      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6">')
content = content.replace('          <div className="bg-white', '          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} className="bg-white')
content = content.replace('          </div>\n        </div>\n\n        {/* Learning Time */}', '          </motion.div>\n        </div>\n\n        {/* Learning Time */}')
content = content.replace('          </div>\n        </div>\n\n        {/* Completion Rate */}', '          </motion.div>\n        </div>\n\n        {/* Completion Rate */}')
content = content.replace('          </div>\n        </div>\n      </div>', '          </motion.div>\n        </div>\n      </motion.div>')

# Main area
content = content.replace('      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[500px]">', '      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[500px]">')
content = content.replace('      </div>\n    </div>', '      </motion.div>\n    </motion.div>')



with open('src/app/dashboard/page.tsx', 'w') as f:
    f.write(content)

print("Updated dashboard")
