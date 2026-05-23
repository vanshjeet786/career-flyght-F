import { updatePassword } from "./actions";

export default function UpdatePasswordPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl border border-gray-200 shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tighter text-gray-900">
            Update Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your new password below.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">New Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="New Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm New Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-4 bg-gray-50"
                placeholder="Confirm New Password"
              />
            </div>
          </div>

          <div>
            <button
              formAction={updatePassword}
              className="group relative flex w-full justify-center rounded-xl bg-black px-3 py-3 text-sm font-bold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors shadow-sm"
            >
              Update password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
