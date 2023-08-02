const newsRouter = require("./news");
const siteRouter = require("./site"); // home , search
function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}
module.exports = route;
