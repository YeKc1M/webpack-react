const merge=require("webpack-merge")
//const HtmlWebpackPlugin=require("html-webpack-plugin")

const parts=require("./webpack.parts")

const commonConfig=merge([
    // {
    //     plugins:[
    //         new HtmlWebpackPlugin({
    //             title:"Webpack demo",
    //         }),
    //     ],
    // },
    {
        output:{
            publicPath:"/",
        }
    },
    parts.loadCSS(),
    parts.loadJavaScript(),
    parts.loadImages(),
])

const productionConfig=merge([
    parts.extractCSS({
        use: "css-loader",
    })
])

const developmentConfig=merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
])

module.exports=mode=>{
    const pages=[
        parts.page({
            title:"Webpack demo", 
            entry:{
                app: './src/index.js',
            },
        }),
        parts.page({
            title:"Another demo", 
            path:"another",
            entry:{
                another: './src/another.js',
            }
        }),
    ]
    // if(mode==="production"){
    //     return merge(conmmonConfig, productionConfig, {mode});
    // }
    // return merge(commonConfig, developmentConfig, {mode});
    const config=mode==="production"? productionConfig: developmentConfig
    return pages.map(page=>merge(commonConfig, config, page, {mode}))
}