import type {GetStaticProps, InferGetStaticPropsType} from 'next'
import Link from 'next/link';
import {FC} from "react";
import axios from "axios"

interface Props {
    name: string
    values: string
    theRequest: any[]
}

const Home: FC<Props> = ({name, values, theRequest}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <span>Nothing to see here, just a span, {values}</span>
            {theRequest && <ul>
                {theRequest.map(item => <li key={item.id}><Link href={`/users/${item.id}`}>{item.name}</Link></li>)}
            </ul>}
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log({context})
    console.log("I run on the server")

    let length: number = request.data.length;

    // if (length < 3) {
    //     return {
    //         redirect: "/someplace_else"
    //     }
    // }
    // if (length > 12) {
    //     return {
    //         notFound: true
    //     }
    // }
    return {
        props: {
            name: "Frances",
            values: "Something",
            theRequest: request.data
        },
        revalidate: 5
    }

}

export default Home
