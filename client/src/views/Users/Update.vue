<template>
<form>
    <v-text-field v-model="editUser.fname" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('fname')" label="First Name" data-vv-name="fname" required></v-text-field>
    <v-text-field v-model="editUser.lname" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('lname')" label="Last Name" data-vv-name="lname" required></v-text-field>
    <v-text-field v-model="editUser.username" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('username')" label="Username" data-vv-name="username" required></v-text-field>
    <v-text-field v-model="editUser.email" v-validate="'required|email'" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email" required></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
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
        callbackValidator: [],
        responseUser: null,
        editUser: {
            fname: null,
            lname: null,
            username: null,
            email: null,
        },
        dictionary: FormErrorFactory.userErrorMessages
    }),

    mounted() {
        this.getUser(this.$route.params.id);
        this.emptyCallbackErrorsList();
        this.$validator.localize('en', this.dictionary);
    },

    methods: {
        getParser: function (data, editUser) {
            for (let item in data) {
                if (!editUser.hasOwnProperty(item)) {
                    editUser[item] = '';
                }
                editUser[item] = data[item];
            }
        },
        getUser(id) {
            let that = this;
            UserAccessService.getUser(id)
                .then(result => {
                    that.responseUser = result.data;
                    that.getParser(result.data, that.editUser);
                });
        },
        jsonCompare(responseUser) {
            let that = this;
            let isEqual = true;
            for (let itemRU in responseUser) {
                for (let itemEU in that.editUser) {
                    if (itemRU === itemEU) {
                        if (responseUser[itemRU] !== that.editUser[itemEU]) {
                            isEqual = false;
                        }
                    }
                }
            }
            return isEqual;
        },
        onValidateAll() {
            let that = this;
            UserAccessService.updateUser(that.$route.params.id, that.editUser)
                .then(result => {
                    this.$router.push({
                        name: Constants.ROUTES.USERS
                    });
                    console.log('A fost editat cu succes');
                })
                .catch(error => {
                    if (error.message) {
                        console.log('muie');
                    }
                });
        },
        emptyCallbackErrorsList: function () {
            this.callbackValidator = [];
        },
        submit() {
            let v = this.$validator;
            if (this.jsonCompare(this.responseUser) === true) {
                this.$router.push({
                    name: Constants.ROUTES.USERS
                });
                return;
            }
            if (v.errors.items.length === 0 && this.jsonCompare(this.responseUser) !== true) {
                this.onValidateAll();
            }
        }
    },
}
</script>
