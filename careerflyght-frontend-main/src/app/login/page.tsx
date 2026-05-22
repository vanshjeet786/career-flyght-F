import { login } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen p-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Login</h1>
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
          formAction={login}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Log in
        </button>
      </form>
      <div className="mt-4">
         <p>Don\Don'tapos;t have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
      </div>
    </main>
  );
}
