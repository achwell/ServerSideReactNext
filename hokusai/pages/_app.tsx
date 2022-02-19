import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'

import type {AppProps} from 'next/app'
import MainLayout from "../components/ui/main.layout"

function MyApp({Component, pageProps}: AppProps) {
    return <MainLayout><Component {...pageProps} /></MainLayout>
}

export default MyApp
