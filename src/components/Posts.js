import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

import PostItem from './PostItem';

class Posts extends Component{
	
	componentWillMount(){
		this.props.fetchPosts()
	}

	render(){
		const postItems = this.props.posts.map((post, i) => {
			return(
				<PostItem key={post.id} post={post}/>
			)
		})

		return(
			<div>
				<h1>Posts</h1>
				<ul className="list-group">
					{postItems}
				</ul>
			</div>
		)
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	posts: state.posts.posts
})

export default connect(mapStateToProps, { fetchPosts })(Posts);

