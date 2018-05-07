import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import ProjectA from '../components/ProjectA';
import ProjectB from '../components/ProjectB';
import PortfolioPage from '../components/PortfolioPage';


const AppRouter = () => (
	<BrowserRouter>
		
		<div>
			<Header />
			<Switch>
				<Route path='/' component={Home} exact={true} />
				<Route path='/portfolio' component={PortfolioPage} exact={true} />
				<Route path='/portfolio/:id' component={ProjectA} />
				<Route path='/contact' component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;