const withAuth = (req, res, next) => {
    if (!req.body.profile_id) {
    // if (!req.session.profile_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;