import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<>
				<Row>
					<Col className="text-left ml-3 h1">
						<div id="title">Welcome to my List of Lists!</div>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
