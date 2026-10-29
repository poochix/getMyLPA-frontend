import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <section>
      <p className="text-sm font-medium text-primary">Overview</p>

      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Your career dashboard
      </h1>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        Your resume insights, skill assessments, and compensation information
        will appear here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: 'Resume Analysis',
            description: 'Upload a resume to understand your skills and gaps.',
          },
          {
            title: 'Skill Assessments',
            description: 'Evaluate your skills and identify areas to improve.',
          },
          {
            title: 'Compensation Insights',
            description: 'Explore salary benchmarks for your career goals.',
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
