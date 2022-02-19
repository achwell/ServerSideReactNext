import {GetStaticProps, InferGetStaticPropsType} from "next"
import { useRouter } from 'next/router'
import {FC} from "react";
import axios from "axios";

interface User {
    id: number
    name: string
    email: string
}

interface Props {
    user: User
}

const UsersByIdPage: FC<Props> = ({user}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { isFallback } = useRouter();
    return (
        <>
            {
                isFallback ?
                    <div>Loading...</div>
                    :
                    <div><a href={`mailto:${user.email}`}>I am user {user.name}</a></div>
            }
        </>
    )
}
export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const {params} = context;
    const id = `${params?.id}`;
    if (!id) {
        return {
            notFound: true
        }
    }
    const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return {
        props: {
            user: request.data
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {id: '1'}},
            {params: {id: '2'}},
            {params: {id: '3'}}
        ],
        fallback: true
    }
}

export default UsersByIdPage