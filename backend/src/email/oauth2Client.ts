import { google } from "googleapis";

//We get out OAuth2.0 Client with oauth2Client

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID!,
  process.env.OAUTH_CLIENT_SECRET!,
  "https://developers.google.com/oauthplayground" 
);

//Then we set the long-lived refresh token to the client.  This will generate new access tokens

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN!, 
});

export async function getAccessToken(): Promise<string> {
    try {
        const tokenResponse = await oauth2Client.getAccessToken(); 
        const accessToken = tokenResponse.token;
        if (!accessToken) throw new Error("Failed to retrieve access token!");
        return accessToken;
    } catch (err) {
        throw new Error(`Failed to retrieve access token! ${err}`);
    }
  }