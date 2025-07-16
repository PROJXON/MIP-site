import nodemailer, { SentMessageInfo, Transporter } from "nodemailer";
import { getAccessToken } from "./oauth2Client";

//Transporter is a function that establishes a connection between the project and the Nodemailer app through defining what service, and auth information
//It will return transporter which is the connection and you can use .sendEmail() to send messages safely.

export async function createTransporter(): Promise<Transporter> {
  const accessToken = await getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER!,
      clientId: process.env.OAUTH_CLIENT_ID!,
      clientSecret: process.env.OAUTH_CLIENT_SECRET!,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN!,
      accessToken,
    },
  });

  return transporter;
}

// Optional helper to send emails easily

export async function sendEmail(mailOptions: nodemailer.SendMailOptions): Promise<SentMessageInfo> {
  try {
    const transporter = await createTransporter();
    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    return info
  } catch (err) {
    throw new Error(`Failed to send email ${err}`);
  }
}
