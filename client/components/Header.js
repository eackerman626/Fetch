import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<>
				<Row>
					<Col className="text-left ml-3">
						<h1 id="title">TITLE</h1>
					</Col>
				</Row>
			</>
		);
	}
}

export default Header;
