import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    addUser: function (user) {
        return new Promise(function (resolve, reject) {
            HttpService.post(RestConstants.USERS, user)
                .then(result => {
                    return resolve(result);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
}