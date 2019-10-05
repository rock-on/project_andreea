import Constants from './Constants'

export default {
    services: [
        {   
            id: "1",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            link: Constants.ROUTES.USERS,
            name: "Users",
            description: "This is the users way"
        },
        {
            id: "2",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            link: Constants.ROUTES.POSTS,
            name: "Posts",
            description: "This is the posts way"   
        },       
    ],
}