import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import { AppContextProvider } from '../store/app_context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppContextProvider>
        <Head>
          <title>Awsome app</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="awesome next practice"/>
            <meta name="keywords" content="Html, css, javascript, next"/>
        </Head>
        <Component {...pageProps} />
      </AppContextProvider>
  )
}

export default MyApp
