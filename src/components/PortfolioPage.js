import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => {
	return (
		<div>
			<h1>Portfolio</h1>

			<p>Links to some of my apps:</p>
			
			<Link to='/portfolio/1' >Project Alpha</Link>
			<Link to='/portfolio/2' >Project Beta</Link>
			
			

		</div>
	);
};

export default PortfolioPage;