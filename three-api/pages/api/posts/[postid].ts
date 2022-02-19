import axios from 'axios'
import {NextApiRequest, NextApiResponse} from "next";
import PostType from "../../../types/post.type";

export const getPost = async (postId: number) => {
    try {
        const request = await axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        return request.data
    } catch (error) {
        return {id: postId, title: "", body: 'Sorry, try again'};
    }
}

const handler = async (req: NextApiRequest, res: NextApiResponse<PostType>) => {
    const postId = +req.query.postid
    if (req.method === 'GET') {
        try {
            const request = await getPost(postId)
            res.status(200).json(request as PostType)
        } catch (error) {
            res.status(401).json({id: postId, title: "", body: ""})
        }
    }
}