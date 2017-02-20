
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
	entry: SRC_DIR + '/index.js',
	output: {
		// path: BUILD_DIR,
		path: './',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loaders: ['style', 'css'] },
			{ test: /\.jsx?$/, loader: 'babel', exclude: /node-modules/, query: { presets: ['es2015', 'react'] } },
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
		]
	},
};