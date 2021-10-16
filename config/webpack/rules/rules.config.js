module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[path]__[local]",
                        },
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                            modules: {
                                localIdentName: "[path]__[local]",
                            },
                        },
                    },
                }]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ['import', {
                            libraryName: "antd",
                            style: true
                        }]
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader', options: {
                        modules: {
                            localIdentName: "[path]__[local]",
                        },
                    }
                },],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: {
                    loader: 'url-loader?limit=10240',
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
}
