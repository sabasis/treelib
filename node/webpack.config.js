var webpack = require("webpack");

module.exports = {
    entry: {
        edit_species: "./jsx/edit_species.jsx",
        edit_genus: "./jsx/edit_genus.jsx",
        edit_family: "./jsx/edit_family.jsx",
        admin_family_tree: "./jsx/admin_family_tree.jsx",
        autres: ['react', 'react-dom'],
    },
    output: {
        path: '../static/js',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "autres", /* filename= */ "autres.bundle.js")
    ]
}