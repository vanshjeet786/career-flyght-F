import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # Mentorship.tsx
    content = content.replace('"Expert matching...', '&quot;Expert matching...')
    content = content.replace("guidance\"", 'guidance&quot;')
    content = content.replace("you're", "you&apos;re")
    content = content.replace("Don't", "Don&apos;t")

    # Pathways.tsx
    content = content.replace("We've", "We&apos;ve")

    with open(file_path, 'w') as f:
        f.write(content)

for fp in [
    'careerflyght-frontend-main/src/components/sections/whatcanibe/Mentorship.tsx',
    'careerflyght-frontend-main/src/components/sections/whatcanibe/Pathways.tsx'
]:
    fix_file(fp)

