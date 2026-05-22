import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # Mentorship.tsx
    content = content.replace('guidance&quot;"', 'guidance"')
    content = content.replace('guidance"', 'guidance"') # Just in case
    # Manually target line 47
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if "long-term career guidance" in line.lower():
            lines[i] = '                "Long-term career guidance"'
            
    content = '\n'.join(lines)

    with open(file_path, 'w') as f:
        f.write(content)

fix_file('careerflyght-frontend-main/src/components/sections/whatcanibe/Mentorship.tsx')

