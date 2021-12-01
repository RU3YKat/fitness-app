const withAuth = (req, res, next) => {
    if (!req.body.user_id) {
    // if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;