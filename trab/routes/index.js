module.exports = (app) => {
    app.get('/', (req, res) => res.json('ok'));
    app.use('/users', require('./user/user'));

};
