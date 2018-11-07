import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
	state = {
		post: null
	}

	componentDidMount() {
		let id = this.props.match.params.post_id;
		axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
			.then(res => {
				this.setState({ post: res.data });
				console.log(res);
			})
	}

	render() {
		const post = this.state.post ? (
			<>
				<h3 className="heading heading--l3">Post #{this.state.post.id}</h3>
				<div className="post post--single">
					<h4 className="post__heading">{this.state.post.title}</h4>
					<p className="text">{this.state.post.body}</p>
				</div>
			</>
		) : (
				<div>Loading post...</div>
			);

		return (
			<div className="container">
				{post}
			</div>
		);
	}
}

export default Post;

