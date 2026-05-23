import re

with open('src/app/profile/page.tsx', 'r') as f:
    content = f.read()

if 'import { motion }' not in content:
    content = content.replace('import { User, Mail', 'import { motion } from "framer-motion";\nimport { toast } from "sonner";\nimport { User, Mail')

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

# Remove message render safely
content = re.sub(r'\{message\.text && \(\s*<div[^>]*>.*?</div>\s*\)\}', '', content, flags=re.DOTALL)

with open('src/app/profile/page.tsx', 'w') as f:
    f.write(content)

print("Fixed profile2")
