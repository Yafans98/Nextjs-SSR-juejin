import Head from "next/head"
import './global.scss'
import icon from '@/common/images/favicon.ico'
import '@/common/styles/frame.scss'
import Layout from "@/components/layout"
import App from "next/app"
import { LOCALDOMAIN } from "utils"
import { ThemeContextProvider } from "utils/theme"
const MyApp = ({ Component, pageProps, layout }) => {
  const { title, categories } = layout;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={icon.src} />
      </Head>
      <ThemeContextProvider>
        <Layout categories={categories}  >
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const pageProps = await App.getInitialProps(context);
  const res = await fetch(`${LOCALDOMAIN}/api/layout`)
    .then(data => data.json());
  //注意和其他两个API返回格式的区别
  return {
    ...pageProps,
    layout: res.attributes
  }
}

export default MyApp;