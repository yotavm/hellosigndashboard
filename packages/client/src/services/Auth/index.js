const GOOGLE_OAUTH_CLIENT_ID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

//Add Google Sign-in Script
const gapiScript = document.createElement("script");
gapiScript.src = "https://apis.google.com/js/platform.js?onload=init";
document.body.appendChild(gapiScript);

let GoogleAuth;
console.log("GOOGLE_OAUTH_CLIENT_ID", GOOGLE_OAUTH_CLIENT_ID);
//init Google Sign-in
window.init = function googleInit() {
  window.gapi.load("auth2", async function InitAuth2() {
    GoogleAuth = await window.gapi.auth2.init({
      client_id: GOOGLE_OAUTH_CLIENT_ID,
    });
  });
};

export const googleSignIn = async () => {
  try {
    const googleUser = await GoogleAuth.signIn();
    console.log(googleUser.getAuthResponse().id_token);
  } catch (e) {
    console.log(e);
  }
};
