import {NextApiRequest, NextApiResponse} from "next"
import {InferIdType} from "mongodb";
import PostType from "../../types/post.type";
import {addItem, getAll} from "../../helpers/database/function";

type Data = { message?: string, result?: InferIdType<PostType>, posts?: PostType[]}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'GET') {
        try {
            const documents = await getAll("posts")
            res.status(200).json({posts: documents as PostType[]})
        } catch (e) {
            res.status(401).json({message: "Opps i did it again"})
        }
    } else if (req.method === 'POST') {
        const { title, body } = req.body;
        try{
            const id = await addItem("posts", { title, body })
            res.status(201).json({message: "Added new post", result:id as unknown as InferIdType<PostType>})
        } catch(error){
            res.status(500).json({message: "Sorry, try again later"})
        }
    }
}
export default handler
