import React, { Component } from 'react';

import { Row, Accordion, Card, Button, ListGroup } from 'react-bootstrap';

function SmallList(props) {
	const smallList = props.smallList;
	return (
		<Card>
			<Card.Header>
				<Accordion.Toggle as={Button} variant="link" eventKey={props.smallListId}>
					List #{props.smallListId}
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey={props.smallListId}>
				<Card.Body>
					<ListGroup>
						{smallList.map((item) => {
							return <ListGroup.Item>{item.name}</ListGroup.Item>;
						})}
					</ListGroup>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
}
function List(props) {
	const bigList = props.data;
	if (bigList) {
		return (
			<Accordion>
				{Object.keys(bigList).map((listId) => {
					return <SmallList smallListId={listId} smallList={bigList[listId]} />;
				})}
			</Accordion>
		);
	}
}

export default List;
