<template>
<form>
    <v-text-field v-model="user.fname" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('fname')" label="First Name" data-vv-name="fname" required></v-text-field>
    <v-text-field v-model="user.lname" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('lname')" label="Last Name" data-vv-name="lname" required></v-text-field>
    <v-text-field v-model="user.username" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('username')" label="Username" data-vv-name="username" required></v-text-field>
    <v-text-field v-validate="'required|min:6|max:100'" v-model="user.password" label="Password" :error-messages="errors.collect('password')" data-vv-name="password" :append-icon="show ? 'visibility' : 'visibility_off'" :type="show ? 'text' : 'password'" hint="At least 8 characters" counter @click:append="show = !show"></v-text-field>
    <v-text-field v-model="user.email" v-validate="'required|email'" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email" required></v-text-field>

    <v-btn class="mr-4" color="red" @click="submit">submit</v-btn>
    <v-btn color="primary" :to="{name: constants.ROUTES.USERS}">Back to Users</v-btn>

</form>
</template>

<script>
import HttpService from "../../_services/HttpService"
import FormErrorFactory from "../../_services/FormErrorFactory"
import UserAccessService from "../../_services/UserAccessService"
import Constants from "../../_services/Constants"

export default {
    $_veeValidate: {
        validator: 'new',
    },

    data: () => ({
        constants: Constants,
        show: false,
        user: {
            fname: null,
            lname: null,
            username: null,
            password: null,
            email: null,
        },
        dictionary: FormErrorFactory.userErrorMessages
    }),

    mounted() {
        this.$validator.localize('en', this.dictionary)
    },

    methods: {
        onValidateAll() {
            let newItem = {
                fname: this.user.fname,
                lname: this.user.lname,
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
            };

            UserAccessService.addUser(newItem)
                .then(result => {
                    console.log('User-ul a fost adaugat cu succes');
                    this.$router.push({
                        name: Constants.ROUTES.USERS
                    });
                })
                .catch(error => {
                    if (error.message) {
                        console.log('Muie');
                    }
                });
        },
        submit() {
            let v = this.$validator;
            this.$validator.validateAll();
            setTimeout(() => {
                if (v.errors.items.length === 0) {
                    this.onValidateAll();
                }
            });
        }
    },
}
</script>
