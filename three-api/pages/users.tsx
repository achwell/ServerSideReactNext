import {useContext} from 'react'
import Link from 'next/link'
import {AppContext} from '../store/app_context'
import User from "../types/user.type";

const Users = () => {
    const appCtx = useContext(AppContext)

    const handleAddUser = () => {
        appCtx.addUser({name: 'Lisa'})
    }

    return <div>
        <h1>The users are</h1>
        <ul>
            {appCtx.users && (appCtx.users as User[]).map((user: User, i: number) => <li key={i}>{user.name}</li>)}
        </ul>
        <div>
            <button onClick={handleAddUser}>Add user</button>
        </div>
        <Link href="/">Go home</Link>
    </div>
}
export default Users