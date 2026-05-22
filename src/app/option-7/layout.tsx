import Link from 'next/link';
import { Home, LayoutGrid, CreditCard, User } from 'lucide-react';

export default function Option7Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#E0E5EC] min-h-screen text-[#4A5568] font-sans flex">
      {/* Neumorphic Sidebar */}
      <aside className="w-24 fixed h-screen flex flex-col items-center py-8 z-50">
        <div className="w-12 h-12 rounded-full shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff] bg-[#E0E5EC] flex items-center justify-center text-xl font-bold text-blue-500 mb-12">
          CF
        </div>

        <nav className="flex flex-col gap-8 flex-1">
          <Link href="/option-7" className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#718096] hover:text-blue-500 transition-colors shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
             <Home className="w-5 h-5" />
          </Link>
          <Link href="/option-7/dashboard" className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#718096] hover:text-blue-500 transition-colors shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
             <LayoutGrid className="w-5 h-5" />
          </Link>
          <Link href="/option-7/pricing" className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#718096] hover:text-blue-500 transition-colors shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
             <CreditCard className="w-5 h-5" />
          </Link>
          <Link href="/option-7/profile" className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#718096] hover:text-blue-500 transition-colors shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8bcc2,inset_-3px_-3px_7px_#ffffff]">
             <User className="w-5 h-5" />
          </Link>
        </nav>
      </aside>

      <main className="ml-24 flex-1 p-10 min-h-screen">
        {children}
      </main>
    </div>
  );
}
