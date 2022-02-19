import {GetStaticProps} from "next"
import {FC} from "react";
import PostType from "../types/post.type";
import { getPost } from './api/posts/[postid]'

interface Props {
    data: PostType
}

const Posts: FC<Props> = ({data}) => {
    console.log({data})
    return (
        <div>
            Post by id
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const post = await getPost(5);
    return {props:{data:post}}
}

export default Posts
