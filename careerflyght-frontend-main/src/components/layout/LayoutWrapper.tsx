"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide navbar on options pages to give full control to each option
  const hideNavbar = pathname.startsWith("/whatcanibe") || pathname.startsWith("/option-");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
