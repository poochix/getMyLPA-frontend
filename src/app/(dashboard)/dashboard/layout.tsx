import { DashboardSidebar } from '@/components/layouts/dashboard-sidebar';
import type { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-muted/30 md:flex">
      <DashboardSidebar />

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
