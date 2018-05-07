import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashboardPage = () => (
	<div>
		the ExpenseDashboardPage Component
	</div>
);

const AddExpensePage = () => (
	<div>
		the AddExpensePage Component
	</div>
);

const EditExpensePage = () => (
	<div>
		the EditExpensePage Component
	</div>
);

const HelpPage = () => (
	<div>
		the HelpPage Component
	</div>
);

const NotFoundPage = () => (
	<div>
		<h2>404 error!</h2>
		<Link to='/'>Back to Home</Link>
	</div>
);

const Header = () => (
	<header>
		<h1>The Expensify App</h1>
		<NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to='/create' activeClassName="is-active">Create New</NavLink>
		<NavLink to='/edit' activeClassName="is-active">Edit</NavLink>
		<NavLink to='/help' activeClassName="is-active">Help</NavLink>
	</header>
);




const routes = (
	<BrowserRouter>
		
		<div>
			<Header />
			<Switch>
				<Route path='/' component={ExpenseDashboardPage } exact={true} />
				<Route path='/create' component={AddExpensePage} />
				<Route path='/edit' component={EditExpensePage} />
				<Route path='/help' component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);




ReactDOM.render(routes, document.getElementById('app'));
