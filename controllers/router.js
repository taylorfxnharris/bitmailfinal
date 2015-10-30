var home = require('./home');
var users = require('./users');
var pages = require('./pages');
var message = require('./message');

// Map routes to controller functions
module.exports = function(app) {
    // Render home page
    app.get('/', home.show);

    // Twilio SMS webhook route
    app.post('/message', message.webhook);

    // Render a page that will allow an administrator to send out a message
    // to all subscribers
    app.get('/admin', pages.showForm);


    // Routes for account creation
    app.get('/users/new', users.showCreate);
    app.post('/users', users.create);
    app.get('/users/:id/verify', users.showVerify);
    app.post('/users/:id/verify', users.verify);
    app.post('/users/:id/resend', users.resend);
    app.get('/users/:id', users.showUser);
    app.post('/message/send', message.sendMessages);
};