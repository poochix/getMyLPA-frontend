'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { healthService } from '@/services/health.service';
import { ApiError } from '@/lib/api-error';

export default function ApiTestPage() {
  const [result, setResult] = useState<string>('Not tested');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    try {
      setLoading(true);
      setResult('Connecting...');

      const data = await healthService.check();

      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      if (error instanceof ApiError) {
        setResult(`API Error (${error.statusCode}): ${error.message}`);
      } else {
        setResult('Unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-8">
      <h1 className="text-2xl font-bold">Backend Connection Test</h1>

      <Button onClick={testConnection} disabled={loading}>
        {loading ? 'Connecting...' : 'Test API Connection'}
      </Button>

      <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm">
        {result}
      </pre>
    </main>
  );
}
