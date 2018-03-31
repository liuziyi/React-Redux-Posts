import { FETCH_POSTS, FETCH_POST, ADD_POST } from '../actions/types';

const initialState = {
	posts: [],
	post: {}
}

export default function(state=initialState, action){
	switch(action.type){
		case FETCH_POSTS:
			// console.log('FETCH POSTS, REDUCER ')
			return { ...state, posts: action.payload }
		case FETCH_POST:
			// console.log('FETCH POST, REDUCER ')
			return { ...state, post: action.payload }
		case ADD_POST:
			// console.log('FETCH POST, REDUCER ')
			return { ...state, post: action.payload }
		default:
			return state
	}
}