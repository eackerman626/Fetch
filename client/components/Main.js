import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Data from './Data';
import Navbar from './Navbar';

class Main extends React.Component {
	render() {
		return (
			<Router>
				{/* <Navbar /> */}
				<Route path="/" component={Data} />
			</Router>
		);
	}
}

export default Main;
