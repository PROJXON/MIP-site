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
Object.defineProperty(exports, "__esModule", { value: true });
//imports Route from express to create a modular route handler
const express_1 = require("express");
//imports sendEmail, which is a helper function to send emails using OAuth2.0 authentication
const mailer_1 = require("../email/mailer");
//create a new router instance to define api endpoints
const router = (0, express_1.Router)();
//defines a POST route for sending emails at the path "/"
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //this route expects a to, subkect, text, and html in the request body
    const { to, subject, text, html, userEmail, name } = req.body;
    //if any of the required fields are missing, it returns a 400 Bad Request error
    if (!to || !subject || (!text && !html)) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    try {
        //calls sendEmail func with provides details to send the email
        yield (0, mailer_1.sendEmail)({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html,
        });
        // 2. Auto-reply to user
        yield (0, mailer_1.sendEmail)({
            from: `'Projxon Team' <${process.env.EMAIL_USER}>`,
            to: userEmail,
            subject: "We've received your submission!",
            //chang there to name
            text: `
        Hi ${name || 'there'},

        Thank you for your interest in the Momentum Internship Program! We have received your submission and will get back to you shortly.


        Best regards,
        The Projxon Team
      `,
        });
        //if successful, it returns a 200 OK response with a success message
        res.status(200).json({ message: 'Email sent successfully!' });
    }
    catch (err) {
        //if not, respond with msg error and status 500
        res
            .status(500)
            .json({ error: 'Failed to send email.', details: err instanceof Error ? err.message : err });
    }
}));
exports.default = router;
