import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r') as f:
        content = f.read()

    # Mentorship.tsx
    content = content.replace('"The mentorship program at WhatCanIBe was the turning point for my career. Connecting with a Senior Architect while I was still in university gave me the confidence and direction I couldn\'t find anywhere else."', '&quot;The mentorship program at WhatCanIBe was the turning point for my career. Connecting with a Senior Architect while I was still in university gave me the confidence and direction I couldn&apos;t find anywhere else.&quot;')
    content = content.replace('guidance&quot;"', 'guidance"')

    with open(file_path, 'w') as f:
        f.write(content)

fix_file('careerflyght-frontend-main/src/components/sections/whatcanibe/Mentorship.tsx')

