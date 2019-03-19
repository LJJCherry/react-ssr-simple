import Koa from "koa";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./app/main";
import views from "koa-views";
import path from "path";

const app = new Koa();

app.use(require("koa-static")(__dirname + "/public"));

app.use(views(path.resolve(__dirname, "./views"), { map: { html: "ejs" } }));

app.use(async ctx => {
  const context = {};
  let str = renderToString(
    <StaticRouter location={ctx.url} context={context}>
      <App />
    </StaticRouter>
  );
  await ctx.render("index", {
    root: str
  });
});
// app.get("/*", (req, res) => {

// }

app.listen(3009);
console.log("系统启动，端口：3009");
