import React, { Component } from 'react'

class AddPerson extends Component {
	state = {
		name: '',
		age: '',
		gender: ''
	};

	handleChange = (e) => {
		this.setState({ [e.currentTarget.name]: e.currentTarget.value });
	};

	render() {
		const { name, age, gender } = this.state;
		return (
			<form onSubmit={this.props.onAddPerson({ name, age, gender })}>
				<label htmlFor="name">Name:</label>
				<input onChange={this.handleChange} id="name" name="name" type="text" />
				<label htmlFor="age">Age:</label>
				<input onChange={this.handleChange} id="age" name="age" type="text" />
				<label htmlFor="gender">Gender:</label>
				<input onChange={this.handleChange} id="gender" name="gender" type="text" />
				<button>Submit</button>
			</form>
		);
	}
}

export default AddPerson;