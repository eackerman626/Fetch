import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Data from './Data';

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Data} />
			</Router>
		);
	}
}

export default Main;
