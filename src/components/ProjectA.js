import React from 'react';

const ProjectA = (props) => {
	return (
		<div>
			<h1>Project Alpha</h1>
			<p>This project has an id of {props.match.params.id}</p>
		</div>
	);
};

export default ProjectA;