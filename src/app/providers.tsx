'use client';

import { ReactNode } from 'react';
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: ReactNode;
}

export function providers({ children }: ProvidersProps) {
  return (
    <>
      {children}

      <Toaster position="top-right" richColors closeButton duration={4000} />
    </>
  );
}
