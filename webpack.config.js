const merge=require("webpack-merge")
const HtmlWebpackPlugin=require("html-webpack-plugin")

const parts=require("./webpack.parts")

const commonConfig=merge([
    {
        plugins:[
            new HtmlWebpackPlugin({
                title:"Webpack demo",
            }),
        ],
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
    if(mode==="production"){
        return merge(conmmonConfig, productionConfig, {mode});
    }
    return merge(commonConfig, developmentConfig, {mode});
}