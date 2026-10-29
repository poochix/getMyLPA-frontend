import Link from 'next/link';

const navigationItems = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Resume Analysis', href: '/dashboard/resume' },
  { label: 'Assessments', href: '/dashboard/assessments' },
  { label: 'Compensation', href: '/dashboard/compensation' },
];

export function DashboardSidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-border bg-background p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <Link
        href="/dashboard"
        className="mb-6 block px-3 text-xl font-bold tracking-tight"
      >
        GetMy<span className="text-primary">LPA</span>
      </Link>

      <nav aria-label="Dashboard navigation" className="space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
