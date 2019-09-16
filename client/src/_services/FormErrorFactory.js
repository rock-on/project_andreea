export default {
    userErrorMessages: {
        custom: {
            fname: {
              required: 'This field can not be empty',
              min: 'This field may not be lesser than 2 characters',
              max: 'This field may not be greater than 100 characters',
            },
            lname: {
              required: 'This field can not be empty',
              min: 'This field may not be lesser than 2 characters',
              max: 'This field may not be greater than 100 characters',
            },
            username: {
              required: 'This field can not be empty',
              min: 'This field may not be lesser than 2 characters',
              max: 'This field may not be greater than 100 characters',
            },
            password: {
              required: 'This field can not be empty',
              min: 'This field may not be lesser than 6 characters',
              max: 'This field may not be greater than 100 characters',
            },
            email: {
              required: 'This field can not be empty',
              email: 'This email address is not valid',
            },
        },
    },

    postErrorMessages: {
      custom: {
          title: {
            required: 'This field can not be empty',
            min: 'This field may not be lesser than 2 characters',
            max: 'This field may not be greater than 100 characters',
          },
          subtitle: {
            required: 'This field can not be empty',
            min: 'This field may not be lesser than 2 characters',
            max: 'This field may not be greater than 100 characters',
          },
          text: {
            required: 'This field can not be empty',
            min: 'This field may not be lesser than 2 characters',
            max: 'This field may not be greater than 200 characters',
          }
      },
  },
}