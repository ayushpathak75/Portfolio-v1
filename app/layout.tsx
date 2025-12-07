import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppProvider } from '@/providers/app-provider';
import { Toaster } from 'sonner';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yuvrajsinghlodh.vercel.app/'), // Kept base URL for now as deployment URL wasn't requested to change

  title: {
    template: '%s | Ayush ',
    default: 'Ayush Pathak',
  },
  authors: {
    name: 'Ayush',
  },
  icons: {
    icon: '/favicon1.ico',
  },

  description:
    "Passionate Software Developer with experience in building secure, scalable, and high- performance applications using .NET, C#, WPF, and REST APIs.",
  openGraph: {
    title: 'Ayush Pathak',
    description:
      "Passionate Software Developer with experience in building secure, scalable, and high- performance applications using .NET, C#, WPF, and REST APIs.",
    url: 'https://yuvrajsinghlodh.vercel.app/',
    siteName: 'Ayush Pathak',
    images: '/project-1.png',
    type: 'website',
  },
  keywords: ['Ayush', 'Ayush Pathak', 'AyushPathak'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
