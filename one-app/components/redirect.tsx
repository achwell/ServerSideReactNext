import {NextPage} from "next"
import {useRouter} from "next/router"

const Redirect: NextPage = () => {
    const router = useRouter()

    const redirectUser = () => {
        router.push("/")
    }

    return (
        <>
            <h1>Redirect</h1>
            <button onClick={redirectUser}>Go Home</button>
        </>
    )
}

export default Redirect