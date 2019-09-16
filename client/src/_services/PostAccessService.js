import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    addPost: function (post) {
        return new Promise(function (resolve, reject) {
            HttpService.post(RestConstants.POSTS, post)
                .then(result => {
                    return resolve(result);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
}