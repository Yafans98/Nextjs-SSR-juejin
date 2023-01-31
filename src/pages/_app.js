import Head from "next/head"
import icon from '@/common/images/favicon.ico'
import '@/common/styles/frame.scss'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>稀土掘金</title>
        <link rel="icon" href={icon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
