import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});

if (!parsedEnv.success) {
  console.error(
    'Invalid frontend environment variables:',
    z.treeifyError(parsedEnv.error),
  );

  throw new Error('Invalid frontend environment configuration.');
}

export const env = {
  appUrl: parsedEnv.data.NEXT_PUBLIC_APP_URL,
  apiBaseUrl: parsedEnv.data.NEXT_PUBLIC_API_BASE_URL.replace(/\/+$/, ''),
  appName: parsedEnv.data.NEXT_PUBLIC_APP_NAME,
} as const;
