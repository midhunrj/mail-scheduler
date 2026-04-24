const cron = require("node-cron");

const startEmailScheduler=()=>{
    cron.schedule(
  "0 9 * * *",
  () => {
    console.log("Running at 9 AM IST");
    sendEmails();
  },
  {
    timezone: "Asia/Kolkata",
  }
)
}

module.exports={
    startEmailScheduler
}