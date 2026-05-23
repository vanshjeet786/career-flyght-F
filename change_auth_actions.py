import re

with open('src/app/login/actions.ts', 'r') as f:
    login_content = f.read()

with open('src/app/signup/actions.ts', 'r') as f:
    signup_content = f.read()


login_content = login_content.replace('redirect("/error");', 'return { error: error.message };')
login_content = login_content.replace('revalidatePath("/", "layout");\n  redirect("/dashboard");', 'revalidatePath("/", "layout");\n  return { success: true };')

signup_content = signup_content.replace('redirect("/error");', 'return { error: error.message };')
signup_content = signup_content.replace('revalidatePath("/", "layout");\n  redirect("/dashboard");', 'revalidatePath("/", "layout");\n  return { success: true };')

with open('src/app/login/actions.ts', 'w') as f:
    f.write(login_content)

with open('src/app/signup/actions.ts', 'w') as f:
    f.write(signup_content)

print("Changed actions")
