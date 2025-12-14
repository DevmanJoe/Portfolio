import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joseph Abu - Senior Fullstack Developer & Software Engineer',
  description: '8+ years of experience in building scalable web and mobile applications using modern technologies like React, Next.js, TypeScript, Python, Django, and more.',
  keywords: 'Joseph Abu, Fullstack Developer, Software Engineer, React, Next.js, TypeScript, Python, Django, Portfolio, Kaduna, Nigeria',
  authors: [{ name: 'Joseph Abu' }],
  openGraph: {
    title: 'Joseph Abu - Fullstack Developer Portfolio',
    description: 'Senior Fullstack Developer with 8+ years of experience',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}