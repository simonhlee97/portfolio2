import React from 'react';

const ProjectB = (props) => {
	return (
		<div>
			<h1>Project Beta</h1>
			<p>This is Project Beta, and has an id of {props.match.params.id}</p>
		</div>
	);
};

export default ProjectB;