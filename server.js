import Koa from "koa";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./app/main";
import views from "koa-views";
import path from "path";

const app = new Koa();

// app.use(function) 将给定的中间件方法添加到此应用程序
app.use(require("koa-static")(__dirname + "/public"));

app.use(views(path.resolve(__dirname, "./views"), { map: { html: "ejs" } }));

app.use(async ctx => {
  const context = {};
  // renderToString 方法将React实例渲染成HTML标签
  let str = renderToString(
    /* StaticRouter 是 React-Router 针对服务器端渲染专门提供的一个路由组件(https://reacttraining.com/react-router/web/api/StaticRouter) */
    <StaticRouter location={ctx.url} context={context}>
      <App />
    </StaticRouter>
  );
  await ctx.render("index", {
    root: str
  });
});
/*app.listen(...) 方法只是以下方法的语法糖:
   const http = require('http');
   const Koa = require('koa');
   const app = new Koa();
   http.createServer(app.callback()).listen(3000);
*/
app.listen(3009);
console.log("系统启动，端口：3009");
