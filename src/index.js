const express = require("express");
const bodyparser = require("body-parser");
const jobSchedule=require("./utils/cron-jobs.js")
const { PORT } = require("./config/index.js");
const router=require("./router/index.js")
const app = express();
const startAndRunServer = async () => {
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use("/api",router);
  app.listen(PORT, async () => {
    jobSchedule();
    console.log(`Server is running at Port ${PORT}`);
  });
};
startAndRunServer();
