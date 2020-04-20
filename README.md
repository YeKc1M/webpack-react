这个项目用来学习用webpack构建react项目

reference：https://blog.csdn.net/weixin_34413802/article/details/92498807

# 配置文件来使用webpack

`npm init`创建`package.json`

`npm install --save-dev webpack`安装webpack依赖

新建app和public文件夹，app存放原始数据和JavaScript模块，public存放webpack打包生成的js文件和html文件

新建`webpack.config.js`文件，配置入口文件夹路径和打包后的文件存放路径

```javascript
module.exports={
    entry: __dirname+'/app/main.js',
    output:{
        path:__dirname+'/public'
        filename:'bundle.js'
    }
}
```

# 构建本地服务器

`npm install --save-dev webpack-dev-server`

配置`webpack.config.js`

```javascript
module.exports={
	...
	devServer:{
		contentBase:'./public',//本地服务器加载页面所在的目录
		historyApiFallback:true,//不跳转
        inline:true//实时刷新
        //port:8888//默认8080
	}
}
```

在`package.json`de scripts对象添加命令

```javascript
"scripts":{
    ...
    "start":"webpack-dev-server --inline"
}
```

在cmd输入`npm start`即可查看结果

# loaders

`npm install --save-dev style-loader css-loader`安装依赖

配置`webpack.config.js`

```javascript
module.exports={
    ...
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },{
                        loader:'css-loader'
                    }//不能调换顺序
                ]
            }
        ]
    }
}
```

# Babel和React

`npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react`

`babel-core`和`babel-loader`版本号需对应

配置`webpack.config.js`

```javascript
module.exports={
    ...
    module:{
        rules:[
            ...,
            {
            	test:/\.js$/,
            	use:{
            		loader:'babel-loader',
            		options:{
            			presets:['env','react']
            		}
            	},
    			exclude:/node_module/
            }
        ]
    }
}
```

导入依赖react

`npm install --save react react-dom`

