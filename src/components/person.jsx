import React from 'react'

const People = ({ name, age, gender, onRemovePerson }) => {
	return (
		<div className="people">
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<div>Gender: {gender}</div>
			<button onClick={onRemovePerson(name)}>Remove person</button>
		</div>
	);
}

export default People;