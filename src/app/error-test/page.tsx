'use client';

import { Button } from '@/components/ui/button';

export default function ErrorTestPage() {
  return (
    <main className="p-8">
      <Button
        variant="destructive"
        onClick={() => {
          throw new Error('Testing error boundary');
        }}
      >
        Trigger rendering error
      </Button>
    </main>
  );
}
