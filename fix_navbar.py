import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # Move setMounted(true) out of useEffect or wrap in setTimeout
    content = content.replace("setMounted(true);\n    const storedUser", "setTimeout(() => setMounted(true), 0);\n    const storedUser")

    with open(file_path, 'w') as f:
        f.write(content)

fix_file('careerflyght-frontend-main/src/components/layout/whatcanibe/WhatCanIBeNavbar.tsx')

