"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransporter = createTransporter;
exports.sendEmail = sendEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const oauth2Client_1 = require("./oauth2Client");
//Transporter is a function that establishes a connection between the project and the Nodemailer app through defining what service, and auth information
//It will return transporter which is the connection and you can use .sendEmail() to send messages safely.
async function createTransporter() {
    const accessToken = await (0, oauth2Client_1.getAccessToken)();
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USER,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken,
        },
    });
    return transporter;
}
// Optional helper to send emails easily
async function sendEmail(mailOptions) {
    try {
        const transporter = await createTransporter();
        const info = await transporter.sendMail(mailOptions);
        return info;
    }
    catch (err) {
        throw new Error(`Failed to send email ${err}`);
    }
}
