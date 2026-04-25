const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
    cron.schedule(
  "0 9 * * *",
  async () => {
    console.log("Running at 9 AM IST");
    await sendEmails(emailList);
  },
  {
    timezone: "Asia/Kolkata",
  }
)
}

module.exports={
    startEmailScheduler
}