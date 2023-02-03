import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Next JS & Tailwind CSS Quickstart</title>
      </Head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
