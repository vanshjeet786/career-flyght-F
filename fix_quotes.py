import os
import re

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # option-3/dashboard
    content = content.replace("Your 'Exposure'", "Your &apos;Exposure&apos;")
    content = content.replace("hasn't", "hasn&apos;t")
    content = content.replace("\"Strategic Decision Making\"", "&quot;Strategic Decision Making&quot;")

    # option-4/page
    content = content.replace("career isn't", "career isn&apos;t")
    content = content.replace("It's a", "It&apos;s a")

    # option-5/dashboard
    content = content.replace("\"Dealing with Uncertainty\"", "&quot;Dealing with Uncertainty&quot;")

    # option-8/dashboard
    content = content.replace("Alex's", "Alex&apos;s")
    content = content.replace("\"Navigating Corporate Politics\"", "&quot;Navigating Corporate Politics&quot;")

    # option-9/dashboard
    content = content.replace("\"Navigating Boardroom Politics\"", "&quot;Navigating Boardroom Politics&quot;")

    # option-9/page
    content = content.replace("\"We are very serious", "&quot;We are very serious")
    content = content.replace("about yours?\"", "about yours?&quot;")

    # page.tsx
    content = content.replace("\"Cockpit\"", "&quot;Cockpit&quot;")

    # components (might exist from before)
    content = content.replace("didn't", "didn&apos;t")
    content = content.replace("doesn't", "doesn&apos;t")

    with open(file_path, 'w') as f:
        f.write(content)

files_to_fix = [
    'careerflyght-frontend-main/src/app/option-3/dashboard/page.tsx',
    'careerflyght-frontend-main/src/app/option-4/page.tsx',
    'careerflyght-frontend-main/src/app/option-5/dashboard/page.tsx',
    'careerflyght-frontend-main/src/app/option-8/dashboard/page.tsx',
    'careerflyght-frontend-main/src/app/option-9/dashboard/page.tsx',
    'careerflyght-frontend-main/src/app/option-9/page.tsx',
    'careerflyght-frontend-main/src/app/page.tsx',
]

for fp in files_to_fix:
    fix_file(fp)

