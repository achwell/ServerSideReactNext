import type {NextPage} from 'next'
import {useSession} from "next-auth/client";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    const [session, loading] = useSession()

    console.log({session, loading})

    return (
        <div className="container">
            <h1>
                Home
            </h1>
            { session && !loading &&(
                <div>
                    User logged in
                </div>
            )}
        </div>
    )
}

export default Home
