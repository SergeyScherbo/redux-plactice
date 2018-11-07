import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		console.log(this.props);
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div key={post.id} className="post">
						<h4 className="post__heading">{post.title}</h4>
						<p>{post.body.slice(0, 100) + "..."}</p>
						<Link to={"/" + post.id}>Read</Link>
					</div>
				)
			})
		) : (
				<div className="center">No posts yet</div>
			);
		return (
			<div className="container">
				<h3 className="heading heading--l3 mod--textCenter">Home</h3>
				{postList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);