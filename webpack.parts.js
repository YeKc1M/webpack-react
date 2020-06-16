exports.devServer=({host, port}={})=>({
    devServer:{
        host,
        port,
        overlay:true,
        inline:true
    }
})

exports.loadCSS=({include, exclude}={})=>({
    module:{
        rules:[
            {
                test:/\.css$/,
                include,
                exclude,
                use:["style-loader", "css-loader"],
            },
        ],
    },
})

exports.loadImages=({}={})=>({
    module:{
        rules:[
            {
                test:/\.(jpg|png)$/,
                use:{
                    loader: "url-loader",
                }
            }
        ]
    }
})

exports.loadJavaScript=({include, exclude}={})=>({
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env','react']
                    }
                },
                exclude:/node_modules/
            }
        ]
    }
})