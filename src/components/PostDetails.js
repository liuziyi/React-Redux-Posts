import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';

class PostDetails extends Component{
	
	componentWillMount(){
		const postId = this.props.match.params.id; 
		this.props.fetchPost(postId)
	}

	render(){
		return(
			<div>
				<Link to="/">Back</Link>
				<h1>Post {this.props.post.id}</h1>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{this.props.post.title}</h5>
						<p className="card-text">{this.props.post.body}</p>
						<p className="card-text"><small className="text-muted">{this.props.post.userId}</small></p>
					</div>
				</div>
			</div>
		)
	}
}

PostDetails.propTypes = {
	fetchPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	post: state.posts.post
})

export default connect(mapStateToProps, { fetchPost })(PostDetails);