import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # option-5/dashboard
    content = content.replace("expanding your 'Exposure'", "expanding your &apos;Exposure&apos;")

    # components
    content = content.replace("didn't", "didn&apos;t")
    content = content.replace("doesn't", "doesn&apos;t")

    with open(file_path, 'w') as f:
        f.write(content)

for fp in [
    'careerflyght-frontend-main/src/app/option-5/dashboard/page.tsx',
    'careerflyght-frontend-main/src/components/sections/whatcanibe/Mentorship.tsx',
    'careerflyght-frontend-main/src/components/sections/whatcanibe/Pathways.tsx'
]:
    fix_file(fp)

