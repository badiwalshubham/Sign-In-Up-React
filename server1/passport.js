const MicrosoftStrategy = require('passport-microsoft').Strategy;
const passport = require("passport");

passport.use(
	new MicrosoftStrategy(
		{
			 clientID: '4b37e737-5ea5-4b02-81ab-57f57e79491c',
             clientSecret: '63226fe6-de11-4e18-8712-ed2be9e1959e',
             callbackURL: "http://localhost:3000/auth/microsoft/callback",
			scope: ["profile", "email"],
			tenant: 'common',
			authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
			tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
