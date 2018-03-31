import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';

class AddPost extends Component{
	
	constructor(){
		super();
		this.state = {
			title: '',
			body: ''
		}
	}

	inputChange(e){
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	submitPost(e){
		e.preventDefault()
		const newPost = {
			title: this.state.title,
			body: this.state.body
		}
		this.props.addPost(newPost)
	}

	render(){
		return(
			<div>
				<h1>Add a Post</h1>
				<form>
					<div className="form-group">
						<label>Title</label>
    					<input onChange={this.inputChange.bind(this)} type="text" className="form-control" id="title"/>
					</div>
					<div className="form-group">
						<label>Body</label>
    					<textarea onChange={this.inputChange.bind(this)} className="form-control" id="body" rows="3"></textarea>
					</div>
					<button type="submit" className="btn btn-lg btn-primary"
					onClick={this.submitPost.bind(this)}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

AddPost.propTypes = {
	addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(AddPost);