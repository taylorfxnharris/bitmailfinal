var cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// 
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
cfg.accountSid = 'AC9cad2999911ba35f0581d6ab0272033d';
cfg.authToken = '224493b293a5b13d3f1a5b8bc1006c33';

// A Twilio number you control - choose one from:
// https://www.twilio.com/user/account/phone-numbers/incoming
// Specify in E.164 format, e.g. "+16519998877"
cfg.twilioNumber = "+18189606245";

// Your Authy production key - this can be found on the dashboard for your 
// Authy application
cfg.authyKey = 'I7tdb1f1AhmcRbD7UBaw0iBPmbvwTb6w';

// MongoDB connection string - MONGO_URL is for local dev,
// MONGOLAB_URI is for the MongoLab add-on for Heroku deployment
// MONGO_PORT_27017_TCP_ADDR is for connecting to the Mongo container
// when using docker-compose
cfg.mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/twilio' || process.env.MONGO_PORT_27017_TCP_ADDR;

// Export configuration object
module.exports = cfg;