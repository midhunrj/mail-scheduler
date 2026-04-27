const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
  console.log("hello i am sending");
  const EmailList=[...new Set(emailList)]
   cron.schedule(
  "25 9 * * *",
  async () => {
    console.log("Running at 09:25 AM IST");
    await sendEmails(EmailList);
  },
  {
    timezone: "Asia/Kolkata",
  }
);
}

module.exports={
    startEmailScheduler
}