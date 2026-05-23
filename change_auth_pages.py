import re

with open('src/app/login/page.tsx', 'r') as f:
    login_content = f.read()

with open('src/app/signup/page.tsx', 'r') as f:
    signup_content = f.read()

# Make them client components
login_content = '"use client";\n\nimport { useState } from "react";\nimport { toast } from "sonner";\nimport { useRouter } from "next/navigation";\n' + login_content
signup_content = '"use client";\n\nimport { useState } from "react";\nimport { toast } from "sonner";\nimport { useRouter } from "next/navigation";\n' + signup_content


# Add form state and submit handler
login_form_logic = """
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await login(formData);
    setLoading(false);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    }
  }
"""

signup_form_logic = """
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await signup(formData);
    setLoading(false);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success("Successfully signed up!");
      router.push("/dashboard");
    }
  }
"""

login_content = login_content.replace('export default function LoginPage() {\n  return (', 'export default function LoginPage() {' + login_form_logic + '\n  return (')
signup_content = signup_content.replace('export default function SignupPage() {\n  return (', 'export default function SignupPage() {' + signup_form_logic + '\n  return (')

# Replace form action with action={handleSubmit}
login_content = login_content.replace('<form className="mt-8 space-y-6">', '<form action={handleSubmit} className="mt-8 space-y-6">')
signup_content = signup_content.replace('<form className="mt-8 space-y-6">', '<form action={handleSubmit} className="mt-8 space-y-6">')

# Update buttons to show loading state
login_content = login_content.replace(
    '<button\n              formAction={login}',
    '<button\n              disabled={loading}\n              type="submit"'
)
login_content = login_content.replace(
    'Sign in\n            </button>',
    '{loading ? "Signing in..." : "Sign in"}\n            </button>'
)

signup_content = signup_content.replace(
    '<button\n              formAction={signup}',
    '<button\n              disabled={loading}\n              type="submit"'
)
signup_content = signup_content.replace(
    'Sign up\n            </button>',
    '{loading ? "Signing up..." : "Sign up"}\n            </button>'
)


with open('src/app/login/page.tsx', 'w') as f:
    f.write(login_content)

with open('src/app/signup/page.tsx', 'w') as f:
    f.write(signup_content)

print("Changed pages")
