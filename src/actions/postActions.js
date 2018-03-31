import { FETCH_POSTS, FETCH_POST, ADD_POST } from './types';
import axios from 'axios';

export function fetchPosts(){
	return function(dispatch){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			// console.log('FETCH POSTS, ACTION ', res.data)
			dispatch({
				type: FETCH_POSTS,
				payload: res.data
			})
		})
		.catch(err => console.log(err));
	}
}

export function fetchPost(postId){
	return function(dispatch){
		axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(res => {
			// console.log('FETCH POST, ACTION ', res.data)
			dispatch({
				type: FETCH_POST,
				payload: res.data
			})
		})
		.catch(err => console.log(err));
	}
}

export function addPost(newPost,history){
	return function(dispatch){
		// console.log('ADD POSTS, ACTION ', newPost)
		axios.request({
			method: 'post',
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: newPost
		})
		.then(res => {
			dispatch({
				type: ADD_POST,
				payload: res.data 
			})
		})
		.catch(err => console.log(err))
	}
}