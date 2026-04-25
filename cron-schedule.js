const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
  console.log("hello i am sending");
  
    cron.schedule(
 "55 11 * * *",
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