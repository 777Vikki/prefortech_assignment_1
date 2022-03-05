const jwt = require('jsonwebtoken');
const SECRETKEY = 'AUTHENTICATION_KEY';
const UserAccessor = require('../accessor/userAccessor');

function isTokenValid(email, token, cb) {
    if(email) {
        UserAccessor.getUserByEmail(email, function(err, user) {
            if(!err) {
                if(user && user.email) {
                    if(user.token === token) {
                        cb();
                    } else {
                        cb('token is not valid');
                    }
                } else {
                    cb('token is not valid');
                }
            } else {
                cb('token is not valid');
            }
        });
    } else {
        cb('token is not valid');
    }
}

function login(email, password, cb) {
    UserAccessor.getUserByEmail(email, function(err, user) {
        if(err) {
            cb('Password does not match!');
        } else {
            if(user && user.password === password) {
                const data = {
                    email: email
                };
                token = jwt.sign(data, SECRETKEY);
                UserAccessor.updateUserToken(email, token, function(error, doc) {
                    if(!error) {
                        cb(undefined, token);
                    } else {
                        cb('some technical issue');
                    }
                });
            } else {
                cb('Password does not match!');
            }
        }

    })
}

function logout(token, cb) {
    if(token && token.split(' ')[1]) {
        try {
            const data = jwt.verify(token.split(' ')[1], SECRETKEY);
            if(data && data.email) {
                UserAccessor.updateUserToken(data.email, '', function(err, doc) {
                   if(!err) {
                    cb()
                   } else {
                    cb('Some error occurred');
                   }
                });
            } else {
                cb('Some error occurred');
            }
        } catch(err) {
            cb('Some error occurred');
        }
        
    }
}

module.exports = {
    login,
    logout,
    isTokenValid
}