import {FC, useState} from "react"
import axios from 'axios'
import {GetStaticProps} from "next";

interface Article {
    userId: number
    id: number
    title: string
    body: string
}

interface Props {
    articles: Article[]
}

const ArticlesPage: FC<Props> = ({articles}) => {

    const [arts,setArts] = useState(articles);

    const loadPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_start=5').
        then(response => {
            setArts([
                ...arts,
                ...response.data
            ])
        })
    }
    console.log({articles})
    return (
        <>
            <ul>
                {arts.map(item => (
                    <li>{item.title}</li>
                ))}
            </ul>
            <button onClick={() => loadPosts()}>
                Get more
            </button>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')

    return {
        props: {
            articles: request.data
        }
    }

}

export default ArticlesPage