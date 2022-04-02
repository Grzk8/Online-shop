module.exports = (req, res, next) => {
    if (!req.session.isLoggetIn) {
        return res.redirect('/login');
    }
    next();
}