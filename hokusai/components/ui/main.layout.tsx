import Head from "next/head"
import Header from "../navigation/header"

type Props = {
    children: JSX.Element,
}
const MainLayout = ({children}: Props) => {
    return (
        <>
            <Head>
                <title>Hokusai tribute</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content="This is a tribute page of hokusai"/>
                <meta name="keywords" content="Hokusai, art, paint"/>
                <meta name="author" content="Francis"/>
            </Head>
            <Header/>
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default MainLayout