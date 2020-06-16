const MiniCssExtraPlugin=require("mini-css-extract-plugin")

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

exports.extractCSS=({include, exclude, use=[]})=>{
    const plugin=new MiniCssExtraPlugin({filename:"[name].css",});
    return {
        module:{
            rules:[
                {
                    test:/\.css$/,
                    include,
                    exclude,
                    use:[
                        MiniCssExtraPlugin.loader,
                    ].concat(use),
                    filename: "styles/[name].css",
                },
            ],
        },
        plugins:[plugin],
    }
}

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