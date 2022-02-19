import * as types from '../types'
import {Dispatch} from "redux"

export const getPosts = () => async (dispatch: Dispatch) => {
    const request = [
        {title: 'js', body: 'awesome'},
        {title: 'next', body: 'great'},
    ];

    dispatch({
        type: types.GET_POSTS,
        payload: request
    })
}