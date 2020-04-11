### react SSR
SSR: Server Side Render 服务端渲染

渲染流程如下图：
![img1](./assets/reactssr1.png)
![img2](./assets/reactssr2.png)
```
ReactDOM.hydrate(element, container[, callback])
```
> Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer. React will attempt to attach event listeners to the existing markup 
[more>](https://reactjs.org/docs/react-dom.html#hydrate)

也就是说使用hydrate方法，组件从 VDOM 到 真实 DOM 的第一次的 render就被省略了，直接向服务端返回的HTML 内容绑定事件

### react-ssr-simple
项目中是一个简单的react ssr
执行`npm i` 然后再执行 npm run build 打包react文件，然后执行npm run dev 启动
### 推荐
优酷的React + Egg +SSR框架：http://ykfe.net/
### 参考链接
https://www.jianshu.com/p/1ff3632056e1
https://zhuanlan.zhihu.com/p/45529730