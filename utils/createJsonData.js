export default (data) => {
	const returnData = {};
	data.forEach((el) => {
		if (el.name) {
			if (returnData[el.listId]) {
				returnData[el.listId].push({ name: el.name, id: el.id });
			} else {
				returnData[el.listId] = [{ name: el.name, id: el.id }];
			}
		}
	});

	for (let list in returnData) {
		returnData[list].sort((item1, item2) => {
			if (item1.id < item2.id) return -1;
			else return 1;
		});
	}

	return returnData;
};
