import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head"

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Kul app</title>
                <meta name="description" content="Den kule appen"/>
                <meta property="og:title" content="Den kule appen" key="title"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
