import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project</title>
        </Head>
        <Header />
        <meta name="description" content="A simple Next.js project with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Hello, welcome to  Next.js + Tailwind project!</h1>
      </main>
    </div>
  );
}