import { signup } from "./actions";

export default function SignupPage() {
  return (
    <main className="min-h-screen p-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Sign up</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-gray-300 p-2 rounded text-black"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border border-gray-300 p-2 rounded text-black"
        />
        <button
          formAction={signup}
          className="bg-green-500 text-white p-2 rounded mt-4"
        >
          Sign up
        </button>
      </form>
      <div className="mt-4">
         <p>Already have an account? <a href="/login" className="text-blue-500">Log in</a></p>
      </div>
    </main>
  );
}
