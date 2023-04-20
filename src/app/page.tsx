import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold leading-normal"><a href="/">LOUER</a></h1>
      <h2 className="text-3xl font-bold leading-normal">A Real Estate Platform For Brokers, Agents, Investors, Homeowners, and Buyers</h2>
      <h3 className='text-xl font-bold leading-normal'>COMING SOON!</h3>
    </main >
  )
}
