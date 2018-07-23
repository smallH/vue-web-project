module.exports = (fileUrl) => {
	return resolve => require(['../views/' + fileUrl], resolve);
}