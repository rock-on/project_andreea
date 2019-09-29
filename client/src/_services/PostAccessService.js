import HttpService from './HttpService';
import RestConstants from './RestConstants';

export default {
    getPosts() {
        return new Promise(function(resolve, reject) {
          HttpService.get(RestConstants.POSTS)
            .then(result => resolve(result))
            .catch(err => {
              return reject(err);
            });
        });
    },
    getPost(id) {
        return new Promise(function(resolve, reject) {
          HttpService.get(`${RestConstants.POSTS}${id}`)
            .then(result => {
              resolve(result);
            })
            .catch(err => {
              reject(err);
            });
        });
      },
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
    },
    updatePost(id, post) {
        return new Promise(function(resolve, reject) {
          HttpService.put(`${RestConstants.POSTS}${id}`, post)
            .then(result => {
              return resolve(result);
            })
            .catch(err => {
              return reject(err);
            });
        });
      },
    deletePost(id) {
        return new Promise(function(resolve, reject) {
          HttpService.delete(`${RestConstants.POSTS}${id}`)
            .then(result => {
              return resolve(result);
            })
            .catch(err => {
              return reject(err);
            });
        });
    }
}