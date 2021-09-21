module.exports = {
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: 'single',
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}