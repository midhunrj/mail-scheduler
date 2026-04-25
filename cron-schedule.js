const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
    cron.schedule(
 "45 11 * * *",
  async () => {
    console.log("Running at 11:45 IST");
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