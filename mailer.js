
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const DAILY_LIMIT = 40;
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function createMail(to) {
  return {
    from: process.env.EMAIL_USER,
    to,
    subject: "Application for Software Development Opportunities",
    text: `Dear Hiring Team,

I hope this email finds you well.

My name is Midhunraj R, and I am a self-taught MERN Stack developer specializing in MongoDB, Express.js, React, Node.js, and TypeScript. I am reaching out to explore any opportunities in frontend, backend, or full-stack development within your organization.

I have recently completed a 6-month Software Engineer internship, where I gained practical experience working on real-world applications, including development, testing, and maintaining scalable systems.

As part of my learning journey, I have developed projects such as Movie-Flex, a full-stack movie ticket booking platform that allows users to explore nearby theatres, book seats, and receive real-time updates. Building such projects has helped me develop a strong understanding of scalable backend systems, responsive frontend development, and clean application structure

I am passionate about building meaningful and user-focused applications, and I am continuously working to improve my skills as a developer. I would be glad to contribute my skills and grow within your team.

Please find my resume attached for your review. Thank you for your time and consideration, and I am looking forward to the opportunity to connect and discuss any relevant opportunities.

Best regards,
Midhunraj R
+91 8848928671
midhunrj18852@gmail.com`,
    attachments: [
      {
        filename: "Midhunraj R resume.pdf",
        path: "./Midhunraj R resume.pdf",
      },
    ],
  };
}

async function sendEmails(emailList) {
  const todayBatch = emailList.slice(0, DAILY_LIMIT);

  for (let i = 0; i < todayBatch.length; i++) {
    const email = todayBatch[i];

    try {
      await transporter.sendMail(createMail(email));
      console.log(`✅ Sent: ${email}`);
    } catch (err) {
      console.log(`❌ Failed: ${email}`, err.message);
    }

    const delay = Math.floor(Math.random() * (120 - 65) + 45) * 1000;
    console.log(`⏳ Waiting ${delay / 1000} sec...\n`);
    await new Promise((res) => setTimeout(res, delay));
  }

  console.log("🎯 Today's batch completed!");
}

module.exports = { sendEmails };