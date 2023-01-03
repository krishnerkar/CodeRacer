"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
