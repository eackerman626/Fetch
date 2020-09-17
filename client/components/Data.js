import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Navbar from './Navbar';
import Header from './Header';
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
			// uncomment this when deploying
			// const data = await response.json();

			// use fake data now because of CORS issue
			const data = createJsonData(sampleData);

			console.log('this is the data: ', data);
			this.setState({ data: data });
			console.log('this is the state: ', this.state);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<Container fluid="lg" className="background_color" id="container">
				<Navbar data={this.state.data} />
				<Header data={this.state.data} />
				<Row className="justify-content-around m-2 background_color"></Row>
			</Container>
		);
	}
}

export default Data;
