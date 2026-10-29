import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GetMyLPA | Career Intelligence Platform',
    template: '%s | GetMyLPA',
  },
  description:
    'Analyze your resume, identify skill gaps, and understand your career and compensation opportunities with GetMyLPA.',

  applicationName: 'GetMyLPA',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
