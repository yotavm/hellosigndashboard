import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;

// get google user hash and find or create user
export const login = async (event) => {
  const { googleToken } = JSON.parse(event.body);
  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: googleToken,
    audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const { sub: userId, family_name: lastName, name: firstName } = payload;

  return {
    statusCode: 200,
    body: JSON.stringify({
      userId,
      lastName,
      firstName,
    }),
  };
};

// check if requester is authorize (check session)
export const authorize = (event) => {};
