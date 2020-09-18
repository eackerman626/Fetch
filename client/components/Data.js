import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Navbar from './Navbar';
import Header from './Header';
import List from './List';
import createJsonData from '../../utils/createJsonData';

import sampleData from '../../data.json';

class Data extends Component {
	constructor() {
		super();
		this.state = {
			data: {},
		};
	}

	async componentDidMount() {
		try {
			console.log('yay component did mount');
			const response = await fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json', { mode: 'no-cors' });
			const data = createJsonData(response.json());

			// use fake data now because of CORS issue
			// const data = createJsonData(sampleData);

			this.setState({ data: data });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<Container fluid="lg" className="background_color" id="container">
				<Navbar data={this.state.data} />
				<Header data={this.state.data} />
				<List data={this.state.data} />
			</Container>
		);
	}
}

export default Data;
