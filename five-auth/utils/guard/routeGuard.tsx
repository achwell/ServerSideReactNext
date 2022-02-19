import {FC, useEffect, useState} from 'react'
import {getSession, session} from 'next-auth/client'
import { useRouter } from 'next/router'

type Props = {
    children: JSX.Element,
}
const RouteGuard: FC<Props> = ({children}) => {

    const router = useRouter()

    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        getSession().then( session =>{
            if(!session){
                router.push('/sign_in')
            } else{
                setLoading(false)
            }
        })
    },[])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <>
            {children}
        </>
    )
}

export default RouteGuard