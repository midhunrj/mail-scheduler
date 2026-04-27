const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
  console.log("hello i am sending");
  const EmailList=[...new Set(emailList)]
   cron.schedule(
  "05 9 * * 1-6",
  async () => {
    console.log("Running at 09:05 AM IST");
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