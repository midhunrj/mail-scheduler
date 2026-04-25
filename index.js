// const dotenv=require('dotenv')
// const nodemailer = require("nodemailer");
// const fs = require("fs");
// const { startEmailScheduler } = require("./cron-schedule");
// dotenv.config()
// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
// const EMAIL_LIST = [
//   "hr@confyans.com",
//   "hr@cubettech.com",
//   "hr@inapp.com",
// ];

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
// type: "SMTP",
// host: "smtp.gmail.com",
// port: 587,
// secure: false,

//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   })


// function createMail(to) {
//   return {
//     from: process.env.EMAIL_USER,
//     to,
//     subject: "Application for Software Development Opportunities",
//     text: `
// Dear Hiring Team,

// I hope this email finds you well.

// My name is Midhunraj R, and I am a self-taught MERN Stack developer specializing in MongoDB, Express.js, React, Node.js, and TypeScript. I am writing to express my interest in any relevant opportunities within your organization, including frontend, backend, or full-stack roles.

// I have recently completed a 6-month Software Engineer internship, where I gained practical experience working on real-world applications, including development, testing, and maintaining scalable systems.

// As part of my learning journey, I have developed projects such as Movie-Flex, a full-stack movie ticket booking platform that allows users to explore nearby theatres, book seats, and receive real-time updates. The application includes authentication, role-based features, and payment integration, focusing on scalability and clean architecture.

// I am passionate about building user-focused and efficient applications and continuously improving my skills.

// Please find my resume attached for your review. Thank you for your time and consideration, and I look forward to the opportunity to connect.

// Best regards,
// Midhunraj R
// +91 8848928671
// midhunrj18852@gmail.com

//     `,
//     attachments: [
//       {
//         filename: "Midhunraj R resume.pdf",
//         path: "./Midhunraj R resume.pdf",
//       },
//     ],
//   };
// }

// async function sendEmails() {
//   for (let i = 0; i < EMAIL_LIST.length; i++) {
//     const email = EMAIL_LIST[i];


//     try {
//       await transporter.sendMail(createMail(email));
//       console.log(`✅ Sent: ${email}`);
//     } catch (err) {
//       console.log(`❌ Failed: ${email}`, err.message);
//     }

//     const delay = Math.floor(Math.random() * (120 - 40) + 40) * 1000;
//     console.log(`⏳ Waiting ${delay / 1000} sec...\n`);
//     await new Promise((res) => setTimeout(res, delay));
//   }

//   console.log("🎯 Done sending emails!");
// }



// startEmailScheduler()

// module.exports={sendEmails}

const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const { startEmailScheduler } = require("./cron-schedule");

dotenv.config();

const EMAIL_LIST = [
  // Tier 1 — Highest callback probability (direct careers / hiring / jobs)
  "careers@techolution.com",
  "careers@ust.com",
  "careers@xoriant.com",
  "careers@keyvalue.systems",
  "careers@mozilor.com",
  "careers@mitsogo.com",
  "careers@metrictreelabs.com",
  "careers@coddletech.com",
  "careers@cloudnautical.com",
  "careers@bridge-global.com",
  "careers@devbunch.com",
  "careers@dotlabs.ai",
  "careers@tiltlabs.io",
  "careers@vayuz.com",
  "careers@stixis.com",
  "careers@ordrio.com",
  "careers@thehexaa.co",
  "careers@itoneclick.com",
  "careers@iiitsolutions.com",
  "careers@hirewand.com",
  "careers@f1studioz.com",
  "careers@edstruments.com",
  "careers@dcubeai.com",
  "careers@cxconsulting.in",
  "careers@apidots.net",
  "careers@avishwebsoft.com",
  "careers@antino.com",
  "careers@bizappln.com",
  "careers@feedec.in",
  "careers@techolution.com",
  "careers@ust.com",
  "careers@vayuz.com",
  "jobs@woxro.com",
  "jobs@haatch.in",
  "jobs@hrways.co",
  "jobs@octathorn.com",
  "jobs@zluck.com",
  "joinus@pearlsofttechnologies.com",
  "hiring@graffersid.com",
  "hiring@sploot.tech",
  "hiring@tjcg.in",
  "hello@tarento.com",
  "hello@caarya.in",
  "hello@reaphr.com",
  "contact@upraised.co",
  "contact@talentnestsolutions.com",
  "talent@metastart.in",
  "recruitment@recro.com",
  "recruitment@hirepre.com",
  "recruiter@webomindapps.com",
  "recruiter@kenland.in",

  // Tier 2 — Strong company HR aliases
  "hr@inapp.com",
  "hr@cubettech.com",
  "hr@confyans.com",
  "hr@softnotions.com",
  "hr@webcastle.in",
  "hr@hashinclude.io",
  "hr@futura-labs.com",
  "hr@techerudite.com",
  "hr@troology.com",
  "hr@trooprlabs.com",
  "hr@renderinfotech.com",
  "hr@transcodesolution.com",
  "hr@whooshpro.com",
  "hr@xongolab.com",
  "hr@zylyz.com",
  "hr@webbrainstechnologies.com",
  "hr@lighttrainstech.com",
  "hr@vtrio.com",
  "hr@paymonk.com",
  "hr@segwitz.com",
  "hr@empyra.com",
  "hr@enfintechnologies.com",
  "hr@nextworktechnologies.com",
  "hr@nonstopcorp.com",
  "hr@nstacksoftech.com",
  "hr@medassolutions.com",
  "hr@microlent.com",
  "hr@softfix.in",
  "hr@sharesoft.in",
  "hr@totalitycorp.com",
  "hr@tranzmeo.com",
  "hr@vinnovatetechnologies.com",
  "hr@vmaxindia.com",
  "hr@qserveits.com",
  "hr@techerudite.com",
  "hr@softnotions.com",
  "hr@appeytechnology.com",
  "hr@appmixo.com",
  "hr@apricornsolutions.com",
  "hr@arustu.com",
  "hr@bizongo.co",
  "hr@bpract.com",
  "hr@candelalabs.com",
  "hr@capillarytech.com",
  "hr@ceymox.com",
  "hr@claimzippy.com",
  "hr@cloudbeestech.com",
  "hr@cloudspringtechnologies.com",
  "hr@code-ox.com",
  "hr@codeedoc.com",
  "hr@codesfortomorrow.com",
  "hr@codoxysolutions.com",
  "hr@computingfuturetech.com",
  "hr@cybersify.tech",
  "hr@dayacs.com",
  "hr@decodeup.com",
  "hr@developerinfotech.com",
  "hr@dharmani.com",
  "hr@doctosmart.com",
  "hr@dolphinwebsolution.com",
  "hr@echeloncs.co.in",
  "hr@emoticup.com",
  "hr@epteck.com",
  "hr@evervent.in",
  "hr@evolutioninfosystem.com",
  "hr@fundfina.com",
  "hr@fusionplusolutions.com",
  "hr@hasotech.com",
  "hr@hifx.co.in",
  "hr@hrindiasolutions.in",
  "hr@i-xltech.com",
  "hr@ideaforge.com",
  "hr@infoniz.com",
  "hr@ksbminfotech.in",
  "hr@kvaliteta.in",
  "hr@lakhanitechnologies.com",
  "hr@mavericksconsultancy.in",
  "hr@nkutechnologies.com",
  "hr@nousinfosystems.com",
  "hr@ocloudsolutions.net",
  "hr@ortezinfotech.in",
  "hr@osperb.com",
  "hr@overturerede.com",
  "hr@pinetech.in",
  "hr@rsbmedtech.com",
  "hr@saviesainfotech.com",
  "hr@spearheadtechnology.com",
  "hr@sridix.com",
  "hr@techmaghi.com",
  "hr@thesukrut.com",
  "hr@thirdrocktechkno.com",
  "hr@tranetech.com",
  "hr@twinsway.in",
  "hr@worldhappinesscode.com",
  "hr_executive@esferasoft.com",
  "hrd@itgeeks.com",

  // Tier 3 — Good generic company inboxes
  "info@dcubeai.com",
  "info@futuremug.com",
  "info@grootsoftware.com",
  "info@xcrino.com",
  "info@capitalnumbers.com",
  "info@bitsping.com",
  "info@cybpress.com",
  "info@enarin.com",
  "info@softbuilders.com",
  "info@tamcherry.com",
  "info@whitestoneinfotech.com",
  "info@four-fox.com",
  "info@nxerra.com",
  "info@seacross.in",
  "info@servicemycar.com",
  "info@sinrorobotics.com",
  "info@tomsher.com",
  "info@wanologicalsolution.com",
  "contact@quikieapps.com",
  "contact@gofinpoint.com",
  "contact@tukilogic.com",
  "business@codingcollective.com",
  "developer@tmbc.in",
  "employee.services@deloitte.com",
  "resume@finacplus.com",
  "resume@jojogroup.in",
  "resumes@vocollc.com",
  "esumes@betterbeans.in",

  // Tier 4 — Personal recruiter / staffing (lower but still usable)
  "Aashutosh@noveltalentsolutions.com",
  "Anushreya@hyringninja.com",
  "Lavanya@techhostservices.com",
  "Meenu.s@apideltech.com",
  "Nithya.br@clientelehr.in",
  "Noor.fatima@infinikorn.com",
  "Pallavi@veracity-india.com",
  "Sonali.joshi@muoro.com",
  "abegail@talentsis.com.sg",
  "abhishek.sharma@bellurbis.com",
  "abisha.baby@infenox.com",
  "achaudhary1@eteaminc.com",
  "aditi@firstcareercentre.com",
  "aiswaryatu@pinetechits.com",
  "akash.jha@minutestoseconds.com",
  "alisha.bathla@antieresolutions.com",
  "amrita.kumari@hnmsolutions.eu",
  "anjjain@gammastack.com",
  "anubha.jain@jinendrainfotech.in",
  "arunak@chimeratechnologies.com",
  "aswathy.ka@hashroot.com",
  "aswathy.r@ellow.io",
  "athira.vinod@triacitsolutions.com",
  "awanti@firstcareercentre.com",
  "b.preeti@myrcloud.com",
  "deepthy@hamon.in",
  "deepti@alphaobs.com",
  "dhana.lakshmi@tech-asst.com",
  "dhruvil.patel@reynasolutions.com",
  "dileep.deniston@speridian.com",
  "dimple.patel@neosofttech.com",
  "dipsikhad@adventglobal.com",
  "divya.c@itechus.net",
  "divya.sharma@anviam.com",
  "dolly.kumawat@propelius.tech",
  "elsa@techfriar.com",
  "gomathi@getinz.com",
  "himani.a@anaghatechnosoft.com",
  "jigyasa.jain@neerinfo.com",
  "jyothi@costaffglobal.com",
  "karthika.s@technoduces.com",
  "lidiya@affable.in",
  "masavi@devenir.co.in",
  "momina@hirexona.com",
  "monika.mukhija@fantv.in",
  "neenu.sandeep@talenthuntshr.com",
  "neha@envsoft.io",
  "nidhikaahirwar@byloop.in",
  "nikhath@skillety.com",
  "nikita.tiwari@scisglobal.com",
  "nisha.giri@aieze.in",
  "nitika.g@shenzyn.com",
  "padma@chimeratechnologies.com",
  "partha.sarathy@vocotechnologies.com",
  "parul.d@mypcot.com",
  "pragna@ctc-dwc.com",
  "preethi.nair@pearlsofttechnologies.co.in",
  "prerna@firstcareercentre.com",
  "priya@deltacubes.us",
  "priyashree@applaunch.io",
  "raheem@exatechinc.com",
  "raji@uniquehire.co.in",
  "ramya@nssitc.com",
  "ranjith.s@zettamine.com",
  "richa@yukthitech.com",
  "sakir.khan1@rangtech.com",
  "sarangi.r@coddletech.com",
  "shamna@phenomenalhr.com",
  "sharmistha@skillety.com",
  "shayan.hussain@sols-pro.com",
  "shikha.bhattacharya@techolution.com",
  "shraddha.shukla@theveca.com",
  "shravani@meedenlabs.com",
  "smita@cronj.com",
  "sonali@provab.com",
  "sripavani.k@visionyle.com",
  "srujana@appizion.com",
  "subha@avtechnoserve.com",
  "sujit.behera@winmore.app",
  "sushma@neokred.tech",
  "suyash.wagh@dexian.com",
  "swanand.shintre@siemens.com",
  "talentlogicalsofttech@gmail.com",
  "tulsi@tekpillar.com",
  "vani@precisesimulation.in",
  "vartika@ment.tech",
  "vineetha@hyperthinksys.com",
  "vyas.ramaraj@nuivio.com",

  // Tier 5 — Lowest priority (gmail / generic / weak response probability)
  "Digitalbrain.hr@gmail.com",
  "Enfotrix@gmail.com",
  "chainmagicianlab@gmail.com",
  "chayil.hr@gmail.com",
  "coadaltechnology@gmail.com",
  "coretalentshub@gmail.com",
  "happinessworld.karnataka@gmail.com",
  "hr.duhzineitsolutions@gmail.com",
  "hr.webbocket@gmail.com",
  "hrbarbikan@gmail.com",
  "lenalive01@gmail.com",
  "logicalsofttech@gmail.com",
  "sarithacookeeapps@gmail.com",
  "sshrsolutions2020@gmail.com",
  "vakratundsolutions1@gmail.com"
];


startEmailScheduler();