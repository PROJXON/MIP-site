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
exports.getAccessToken = getAccessToken;
const googleapis_1 = require("googleapis");
//We get out OAuth2.0 Client with oauth2Client
const oauth2Client = new googleapis_1.google.auth.OAuth2(process.env.OAUTH_CLIENT_ID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI || 'https://developers.google.com/oauthplayground');
//Then we set the long-lived refresh token to the client.  This will generate new access tokens
//this so that users dont have to log in every time
oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});
function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tokenResponse = yield oauth2Client.getAccessToken();
            const accessToken = tokenResponse.token;
            if (!accessToken)
                throw new Error('Failed to retrieve access token!');
            return accessToken;
        }
        catch (err) {
            throw new Error(`Failed to retrieve access token! ${err}`);
        }
    });
}
