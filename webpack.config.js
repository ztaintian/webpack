var webpack = require("webpack"),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
	entry:{index:'./index.js'},
	output:{
		path:path.resolve(__dirname,'dist/js'),
		filename:'[name].js'
	},
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({//压缩js
	      compress: {
	        warnings: false
	      },
	      sourceMap: true,
	      mangle: false
	    }),
	    new HtmlWebpackPlugin({
	    	template:'index.html',//模板
	    	inject:'head',
	    	minify: {//压缩html
                removeComments: true,
                collapseWhitespace: true
            }
	    })
  	]
}