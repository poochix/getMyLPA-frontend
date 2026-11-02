'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Root application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900">
        <main className="w-full max-w-md text-center">
          <p className="mb-4 text-6xl font-bold text-red-600">500</p>

          <h1 className="text-2xl font-bold">Application unavailable</h1>

          <p className="mt-3 text-neutral-600">
            Something unexpected happened while starting the application. Please
            try again.
          </p>

          <button
            onClick={reset}
            className="mt-6 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Reload application
          </button>
        </main>
      </body>
    </html>
  );
}
