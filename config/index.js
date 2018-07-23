'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

var host_env = process.env.HOST ? process.env.HOST : 'localhost';
var port_env = process.env.PORT ? process.env.PORT : '8080';
var cdn_env = process.env.CDN ? process.env.CDN : '/';

module.exports = {
	dev: {
		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
			'/api': {
				target: 'http://127.17.5.117:3000',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				},
				onProxyReq(proxyReq, req, res) {
					proxyReq.setHeader('Referer', 'http://127.17.5.117:3000');
					proxyReq.setHeader('Origin', 'http://127.17.5.117:3000');
				},
				onProxyRes(proxyRes, req, res) {
					proxyRes.headers['Access-Control-Request-Origin'] = '*';
					proxyRes.headers['Access-Control-Request-Headers'] = '*';
				}
			}
		},

		// Various Dev Server settings
		host: host_env, // can be overwritten by process.env.HOST
		port: port_env, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		/**
		 * Source Maps
		 */

		// https://webpack.js.org/configuration/devtool/#development
		devtool: 'cheap-module-eval-source-map',

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,
		cssSourceMap: true
	},

	build: {
		env: require('./prod.env'),

		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: cdn_env,

		/**
		 * Source Maps
		 */

		productionSourceMap: true,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],

		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report
	}
}