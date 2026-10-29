import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Career intelligence, made actionable
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Understand your skills.
          <span className="block text-primary">
            Make your next career move.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          GetMyLPA helps you understand your resume, identify skill gaps, and
          explore career and compensation opportunities.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg">
            <Link href="/register">Get started</Link>
          </Button>

          <Button variant="outline" size="lg">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
