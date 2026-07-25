import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'Gazi Sayem Uddin Samir | CSE Student, AI/ML & C++ Developer',
  description: 'Official portfolio of Gazi Sayem Uddin Samir—Computer Science student, C++ developer, machine learning researcher, and software engineer.',
  keywords: ['Gazi Sayem Uddin Samir', 'CSE Portfolio', 'Machine Learning', 'C++ Developer', 'Software Engineer Bangladesh'],
  openGraph: {
    title: 'Gazi Sayem Uddin Samir | Portfolio',
    description: 'Explore projects, research, and skills in AI/ML and full-stack development.',
    url: 'https://samir.dev',
    siteName: 'Gazi Sayem Uddin Samir Portfolio',
    images: [{ url: 'https://samir.dev/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gazi Sayem Uddin Samir',
    jobTitle: 'Software Engineer & AI Researcher',
    alumniOf: 'BGC Trust University Bangladesh',
    sameAs: [
      'https://github.com',
      'https://linkedin.com',
      'https://scholar.google.com',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body class="bg-slate-50 dark:bg-brand-dark text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
