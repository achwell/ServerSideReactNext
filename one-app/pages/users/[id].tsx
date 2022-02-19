import {NextPage} from "next"
import {useRouter} from "next/router";

const UsersByIdPage: NextPage = () => {
    const router = useRouter()
    console.log(router)
    return (
        <h1>The user ID is: {router.query.id}</h1>
    )
}

export default UsersByIdPage