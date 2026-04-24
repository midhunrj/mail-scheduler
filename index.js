require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");
const { startEmailScheduler } = require("./cron-schedule");

const EMAIL_LIST = [
  "hr@confyans.com",
  "hr@cubettech.com",
  "hr@inapp.com",
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

function getCompanyName(email) {
  try {
    return email.split("@")[1].split(".")[0];
  } catch {
    return "Your Company";
  }
}

function createMail(to, company) {
  return {
    from: process.env.EMAIL_USER,
    to,
    subject: "MERN Stack Developer | Immediate Availability",
    text: `
Dear Hiring Team,

I hope this email finds you well.

My name is Midhunraj R, and I am a self-taught MERN Stack developer specializing in MongoDB, Express.js, React, Node.js, and TypeScript. I am writing to express my interest in any relevant opportunities within your organization, including frontend, backend, or full-stack roles.

I have recently completed a 6-month Software Engineer internship, where I gained practical experience working on real-world applications, including development, testing, and maintaining scalable systems.

As part of my learning journey, I have developed projects such as Movie-Flex, a full-stack movie ticket booking platform that allows users to explore nearby theatres, book seats, and receive real-time updates. The application includes authentication, role-based features, and payment integration, focusing on scalability and clean architecture.

I am passionate about building user-focused and efficient applications and continuously improving my skills.

Please find my resume attached for your review. Thank you for your time and consideration, and I look forward to the opportunity to connect.

Best regards,
Midhunraj R
+91 8848928671
midhunrj18852@gmail.com

    `,
    attachments: [
      {
        filename: "Midhunraj_resume.pdf",
        path: "./Midhunraj_resume.pdf",
      },
    ],
  };
}

async function sendEmails() {
  for (let i = 0; i < EMAIL_LIST.length; i++) {
    const email = EMAIL_LIST[i];
    const company = getCompanyName(email);

    try {
      await transporter.sendMail(createMail(email, company));
      console.log(`✅ Sent: ${email}`);
    } catch (err) {
      console.log(`❌ Failed: ${email}`, err.message);
    }

    const delay = Math.floor(Math.random() * (120 - 40) + 40) * 1000;
    console.log(`⏳ Waiting ${delay / 1000} sec...\n`);
    await new Promise((res) => setTimeout(res, delay));
  }

  console.log("🎯 Done sending emails!");
}

sendEmails();

startEmailScheduler()