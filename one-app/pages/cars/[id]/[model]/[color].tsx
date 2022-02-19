import {NextPage} from "next"
import {useRouter} from "next/router";

const CarColorPage: NextPage = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Cars Color page</h1>
            <h1>The car ID is: {router.query.id}</h1>
            <h1>The car Model is: {router.query.model}</h1>
            <h1>The car Color is: {router.query.color}</h1>
        </div>
    )
}

export default CarColorPage