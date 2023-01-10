const express = require("express");
const Job = require("jobs-library");
const app = express();

const queueJob = new Job({
  dbPort: 6379,
  dbUrl: "127.0.0.1",
});

app.get("/", (req, res) => {
  const sampleQueue = queueJob.createQueue("sampleQueue");
  queueJob.addTaskToQueue(sampleQueue, { name: "tanmay" }, saveNameTodDb, {
    delay: 5000,
  });
  async function saveNameTodDb(name) {
    console.log(name);
    console.log("suiii");
  }
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
