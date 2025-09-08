"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function createTransporter() {
    return __awaiter(this, void 0, void 0, function* () {
        const accessToken = yield (0, oauth2Client_1.getAccessToken)();
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
    });
}
// Optional helper to send emails easily
function sendEmail(mailOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transporter = yield createTransporter();
            const info = yield transporter.sendMail(mailOptions);
            return info;
        }
        catch (err) {
            throw new Error(`Failed to send email ${err}`);
        }
    });
}
