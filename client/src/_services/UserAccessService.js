import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    getUsers() {
        return new Promise(function(resolve, reject) {
          HttpService.get(RestConstants.USERS)
            .then(result => resolve(result))
            .catch(err => {
              return reject(err);
            });
        });
    },
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
    deleteUser(id) {
        return new Promise(function(resolve, reject) {
          HttpService.delete(`${RestConstants.USERS}${id}`)
            .then(result => {
              return resolve(result);
            })
            .catch(err => {
              return reject(err);
            });
        });
    }
}
