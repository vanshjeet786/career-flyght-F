import { signup } from "./actions";

export default function SignupPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tighter text-gray-900">
            Construct your legacy
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create an account to start your journey.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="full_name" className="sr-only">Full Name</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              formAction={signup}
              className="group relative flex w-full justify-center rounded-xl bg-black px-3 py-3 text-sm font-bold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors shadow-sm"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-bold text-black hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
