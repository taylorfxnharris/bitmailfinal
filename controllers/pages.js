// Render a form to send an MMS message
exports.showForm = function(request, response) {
    // Render form, with any success or error flash messages
    response.render('admin', {
        errors: request.flash('errors'),
        successes: request.flash('successes')
    });
};