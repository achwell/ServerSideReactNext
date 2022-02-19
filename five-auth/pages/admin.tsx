import {getSession} from "next-auth/client"
import RouteGuard from "../utils/guard/routeGuard"
import {GetServerSideProps} from "next";

const Admin = () => {
    return (
        <RouteGuard>
            <div>
                <h1>Admin</h1>
            </div>
        </RouteGuard>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({req})
    return !session
        ? {redirect: {destination: '/sign_in', permanent: false}}
        : { props: {ifNeeded: session}
    }
}

export default Admin