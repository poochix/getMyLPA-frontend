'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Application rendering error:', error);
  }, [error]);

  const router = useRouter();
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-destructive/10 text-2xl font-bold text-destructive">
          !
        </div>

        <h1 className="text-2xl font-bold tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-3 text-muted-foreground">
          We encountered an unexpected problem while loading this page. Please
          try again.
        </p>

        {error.digest && (
          <p className="mt-3 text-xs text-muted-foreground">
            Error reference: {error.digest}
          </p>
        )}

        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>

          <Button variant="outline" onClick={() => router.push('/')}>
            Go home
          </Button>
        </div>
      </div>
    </main>
  );
}
