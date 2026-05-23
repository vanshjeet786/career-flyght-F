import re

with open('src/app/profile/page.tsx', 'r') as f:
    content = f.read()

# Add framer motion & toast
if 'import { motion } from "framer-motion"' not in content:
    content = content.replace('import { User, Mail', 'import { motion } from "framer-motion";\nimport { toast } from "sonner";\nimport { User, Mail')


# Handle Save
content = content.replace(
"""      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: "Error updating profile." });
    }""",
"""      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile.");
    }"""
)

# Remove old message logic from render
content = re.sub(r'\{message\.text && \(\s*<div[^>]*>.*?</div>\s*\)\}', '', content, flags=re.DOTALL)

# Add motion to save button
content = content.replace(
"""          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm"
          >""",
"""          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm"
          >"""
)
content = content.replace('          </button>', '          </motion.button>')


with open('src/app/profile/page.tsx', 'w') as f:
    f.write(content)

print("Updated profile")
