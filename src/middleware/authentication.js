const jwt = require('jsonwebtoken');
const SECRETKEY = 'AUTHENTICATION_KEY';
const AuthenticationService = require('../services/authentication');

function checkIfAuthenticated(req, res, next) {
    const tokenString = req.headers['authorization'];
    if(tokenString) {
        const actualToken = tokenString.split(' ')[1];
        if(actualToken) {
            try {
                const data = jwt.verify(actualToken, SECRETKEY);
                if(data && data.email) {
                    AuthenticationService.isTokenValid(data.email, actualToken, function(err, user) {
                        if(err) {
                            res.status(401).send('Please login before accessing the API');
                        } else {
                            next();
                        }
                    })
                } else {
                    res.status(401).send('Please login before accessing the API');
                }
            } catch(err) {
                res.status(401).send('Please login before accessing the API');
            }
        } else {
            res.status(401).send('Please login before accessing the API');
        }
    } else {
        res.status(401).send('Please login before accessing the API');
    }
    
}

module.exports = {
    checkIfAuthenticated
};