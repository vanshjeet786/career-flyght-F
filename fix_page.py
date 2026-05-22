import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # Remove unused options
    content = content.replace("  const options = Array.from({ length: 10 }, (_, i) => i + 1);\n\n", "")

    with open(file_path, 'w') as f:
        f.write(content)

fix_file('careerflyght-frontend-main/src/app/page.tsx')

