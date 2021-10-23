import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu clone</title>
        <meta name="description" content="This is a simple front end clone of hulu using react.js and next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
    </div>
  )
}
