# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 目录结构
├── /node_modules
├── /public
|   ├── favicon.ico  // 网页图标
|   └── index.html   // HTML页模板
|── /src
|    ├── /common     //全局公用目录
|    |   ├── /fonts  //字体文件目录
|    |   ├── /images //图片文件目录
|    |   ├── /js     //公用js文件目录
|    |   ├── /styles 
|    |   |   ├── frame.css     //全部公用样式(import其它css)
|    |   |   ├── global.css    //全局公用样式
|    |   |   ├── reset.css     //清零样式
|    ├── components            //公共模块组件目录         
|    |   ├── /header           //头部导航模块
|    |   |   ├── index.js      //header主文件
|    |   |   ├── header.css    //header样式文件
|    |   └── ...               //其它模块
|    ├── /pages                //页面组件目录
|    |   ├── /home             //home页目录
|    |   |   ├── index.js      //home页主文件
|    |   |   ├── home.css      //home样式文件
|    |   ├── /login            //login页目录
|    |   |   ├── index.js      //login页主文件
|    |   |   ├── login.css     //login样式文件
|    |   └── ...               //其它页面
|    ├── /App.js               //项目主模块
|    └── /index.js             //项目入口文件
├── .gitignore
├── package.json
├── README.md
└── yarn.lock              