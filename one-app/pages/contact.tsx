import {NextPage} from "next"
import Head from "next/head"
import Redirect from "../components/redirect"

const ContactPage: NextPage = () => {

    const title = "Kontakt oss"

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Kontakt oss; vi gir faen"/>
                <meta property="og:title" content="Min sidetittel" key="title"/>
            </Head>

            <h1>Contact</h1>

            <Redirect/>
        </>
    )
}

export default ContactPage