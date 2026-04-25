const cron = require("node-cron");
const { sendEmails } = require("./mailer");

const startEmailScheduler=(emailList)=>{
  console.log("hello i am sending");
  const EmailList=[...new Set(emailList)]
   cron.schedule(
  "20 13 * * *",
  async () => {
    console.log("Running at 12:45 PM IST");
    await sendEmails(emailList);
  },
  {
    timezone: "Asia/Kolkata",
  }
);
}

module.exports={
    startEmailScheduler
}