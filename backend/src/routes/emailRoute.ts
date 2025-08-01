//imports Route from express to create a modular route handler
import { Router } from "express";

//imports sendEmail, which is a helper function to send emails using OAuth2.0 authentication
import { sendEmail } from "../email/mailer";

//create a new router instance to define api endpoints
const router = Router();


//defines a POST route for sending emails at the path "/"
router.post("/", async (req, res) => {
    //this route expects a to, subkect, text, and html in the request body
  const { to, subject, text, html } = req.body;

  //if any of the required fields are missing, it returns a 400 Bad Request error
  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  
  try {
    //calls sendEmail func with provides details to send the email
    await sendEmail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });
    //if successful, it returns a 200 OK response with a success message
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    //if not, respond with msg error and status 500
    res.status(500).json({ error: "Failed to send email.", details: err instanceof Error ? err.message : err });
  }
});

export default router;