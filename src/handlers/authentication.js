const AuthenticationService = require('../services/authentication');

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    AuthenticationService.login(email, password, function(err, token) {
        if(!err) {
            res.status(200).send(token);
        } else {
            res.status(401).send(err);
        }
    });
}

function logout(req, res) {
    const token = req.headers['authorization'];
    AuthenticationService.logout(token, function(err, user) {
        if(err) {
            console.log('if');
            res.status(401).send(err);
        } else {
            res.status(200).send('logout success');
        }
    });
}

module.exports = {
    login,
    logout
}