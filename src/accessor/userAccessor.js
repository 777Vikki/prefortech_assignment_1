const UserModal = require("../db/modals/users").Users;

function getUserByEmail(email, cb) {
    UserModal.findOne({email: email}, cb);
}

function updateUserToken(email, token, cb) {
    const filter = {email: email};
    const update = {token: token};

    UserModal.findOneAndUpdate(filter, update, cb);
}

module.exports = {
    getUserByEmail,
    updateUserToken
}