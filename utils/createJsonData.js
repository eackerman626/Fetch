export default (data) => {
	const returnData = [];
	data.forEach((el) => {
		if (el.name) {
			returnData.push(el);
		}
	});
	return returnData;
};
