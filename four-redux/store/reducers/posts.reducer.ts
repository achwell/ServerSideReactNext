import {GET_POSTS} from '../types'
import Post from "../../types/post.type";

let INITIAL_STATE = {someValue: true}

interface ActionGetPosts {
    type: typeof GET_POSTS,
    payload: Post[]
}
type Action = ActionGetPosts

export default function usersReducers(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload}
        default:
            return state;
    }
}