import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold">
        Home
      </h1>
      {user ? (
        <div className="mt-4">
          <p>Logged in as: {user.email}</p>
          <ul className="mt-4 list-disc pl-5">
            <li><a href="/admin" className="text-blue-500">Go to Admin</a></li>
            <li><a href="/ninthbox" className="text-blue-500">Go to Ninthbox</a></li>
            <li><a href="/whatcanibe" className="text-blue-500">Go to What can I be</a></li>
          </ul>
        </div>
      ) : (
        <div className="mt-4">
          <p>You are not logged in.</p>
          <a href="/login" className="text-blue-500">Log in</a>
        </div>
      )}
    </main>
  );
}
