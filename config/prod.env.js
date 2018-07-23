'use strict'

var host = process.env.HOST ? process.env.HOST : 'localhost';
var port = process.env.PORT ? process.env.PORT : '8080';
var cdn = process.env.CDN ? process.env.CDN : '/';

module.exports = {
	NODE_ENV: '"production"',
	HOST: `"${host}"`,
	PORT: `"${port}"`,
	CDN: `${cdn}`
}