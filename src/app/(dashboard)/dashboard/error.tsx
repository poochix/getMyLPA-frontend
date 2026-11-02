'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  useEffect(() => {
    console.error('Dashboard error:', error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">
          Dashboard temporarily unavailable
        </h1>

        <p className="mt-3 text-muted-foreground">
          We couldn&apos;t load this section of your dashboard. Please try
          again.
        </p>

        <Button onClick={reset} className="mt-6">
          Retry
        </Button>
      </div>
    </section>
  );
}
