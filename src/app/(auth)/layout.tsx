import type { ReactNode } from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4 py-12">
      <Link
        href="/"
        className="mb-8 text-2xl font-bold tracking-tight text-foreground"
      >
        GetMy<span className="text-primary">LPA</span>
      </Link>

      <div className="w-full max-w-md">{children}</div>
    </main>
  );
}
