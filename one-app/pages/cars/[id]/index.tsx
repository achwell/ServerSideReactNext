import {NextPage} from "next"
import {useRouter} from "next/router";

const CarsIdPage: NextPage = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Cars id page</h1>
            <h1>The car ID is: {router.query.id}</h1>
        </div>
    )
}

export default CarsIdPage