import React, { Component } from 'react';
import { saveAs } from 'file-saver';
import { Navbar, Dropdown } from 'react-bootstrap';

import createJsonData from '../../utils/createJsonData';

class MyNavbar extends Component {
	constructor() {
		super();
		this.handleJsonClick = this.handleJsonClick.bind(this);
	}

	handleJsonClick() {
		const jsonData = this.props.data;
		const fileName = 'data.json';

		const fileToSave = new Blob([JSON.stringify(jsonData)], {
			type: 'application/json',
			name: fileName,
		});

		saveAs(fileToSave, fileName);
	}

	render() {
		const data = this.props.data;
		return (
			<Navbar fluid variant="dark" bg="dark" className="justify-content-between">
				<Navbar.Brand href="/">Home</Navbar.Brand>
				<Dropdown>
					<Dropdown.Toggle>Menu</Dropdown.Toggle>
					<Dropdown.Menu alignRight>
						<Dropdown.Item onClick={window.print}>Print</Dropdown.Item>
						<Dropdown.Item onClick={this.handleJsonClick}>Download Data</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}

export default MyNavbar;
