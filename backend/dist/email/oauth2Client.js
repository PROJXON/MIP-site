"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = getAccessToken;
const googleapis_1 = require("googleapis");
//We get out OAuth2.0 Client with oauth2Client
const oauth2Client = new googleapis_1.google.auth.OAuth2(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI || 'https://developers.google.com/oauthplayground');
//Then we set the long-lived refresh token to the client.  This will generate new access tokens
//this so that users dont have to log in every time
oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});
async function getAccessToken() {
    try {
        const tokenResponse = await oauth2Client.getAccessToken();
        const accessToken = tokenResponse.token;
        if (!accessToken)
            throw new Error('Failed to retrieve access token!');
        return accessToken;
    }
    catch (err) {
        throw new Error(`Failed to retrieve access token! ${err}`);
    }
}
