import mongoose, { Schema, model } from 'mongoose'
import PostType from "../../types/post.type";

const postSchema = new Schema<PostType>({title: {type: String, required: true}, body: {type: String, required: true}})
const Post = mongoose.models['Post'] || model<PostType>('Post', postSchema)
export default Post