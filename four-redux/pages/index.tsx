import type {NextPage} from 'next'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getPosts} from '../store/actions/posts.action'

const Home: NextPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home
