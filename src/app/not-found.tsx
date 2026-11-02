import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold tracking-tight text-primary">404</p>

        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>

        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Button className="mt-6">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
