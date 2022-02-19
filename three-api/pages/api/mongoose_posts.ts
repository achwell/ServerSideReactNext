import {NextApiRequest, NextApiResponse} from "next";
import {connectToDB} from '../../helpers/mongoose/db'
import Post from '../../helpers/mongoose/post.model'
import PostType from "../../types/post.type";

type Data = { message?: string, result?: PostType, posts?: PostType[] }

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    connectToDB()
    if (req.method === 'GET') {
        try {
            const result = await Post.find({}).exec()
            res.status(201).json({posts: result as PostType[]})
        } catch (error) {
            res.status(500).json({message: 'Getting data failed'})
        }
    } else if (req.method === 'POST') {
        const {title, body} = req.body
        try {
            const post = new Post({title, body})
            await post.save();
            res.status(200).json({result: post as PostType})
        } catch (error) {
            res.status(500).json({message: 'Posting data failed'})
        }
    }
}
export default handler
