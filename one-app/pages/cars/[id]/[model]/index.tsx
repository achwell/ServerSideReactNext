import {NextPage} from "next"
import {useRouter} from "next/router";

const CarsModelPage: NextPage = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Cars Model page</h1>
            <h1>The car ID is: {router.query.id}</h1>
            <h1>The car Model is: {router.query.model}</h1>
        </div>
    )
}

export default CarsModelPage