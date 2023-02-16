import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Chatbox from '@/components/Chatbox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen  max-w-800 mx-auto border-1 drop-shadow-lg">
    <Head>
      <title>My Chatbot App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 text-center">
          My Chatbot App
        </h1>
      </div>
    </header>

    <main>
      <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8  overflow-hidden scrollbar-hidden">
        <div className="px-4 py-6 sm:px-0">
          <Chatbox />
        </div>
      </div>
    </main>
  </div>
  )
}
