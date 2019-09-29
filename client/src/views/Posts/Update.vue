<template>
<form>
    <v-text-field v-model="editPost.title" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('title')" label="Title" data-vv-name="title" required></v-text-field>
    <v-text-field v-model="editPost.subtitle" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('subtitle')" label="Subtitle" data-vv-name="subtitle" required></v-text-field>
    <v-text-field v-model="editPost.text" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('text')" label="Text" data-vv-name="text" required></v-text-field>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn color="primary" :to="{name: constants.ROUTES.POSTS}">Back to Posts</v-btn>
</form>
</template>

<script>
import HttpService from "../../_services/HttpService"
import FormErrorFactory from "../../_services/FormErrorFactory"
import PostAccessService from "../../_services/PostAccessService"
import Constants from "../../_services/Constants"

export default {
    $_veeValidate: {
        validator: 'new',
    },

    data: () => ({
        constants: Constants,
        callbackValidator: [],
        responsePost: null,
        editPost: {
            title: null,
            subtitle: null,
            text: null,
        },
        dictionary: FormErrorFactory.postErrorMessages
    }),

    mounted() {
        this.getPost(this.$route.params.id);
        this.emptyCallbackErrorsList();
        this.$validator.localize('en', this.dictionary);
    },

    methods: {
        getParser: function (data, editPost) {
            for (let item in data) {
                if (!editPost.hasOwnProperty(item)) {
                    editPost[item] = '';
                }
                editPost[item] = data[item];
            }
        },
        getPost(id) {
            let that = this;
            PostAccessService.getPost(id)
                .then(result => {
                    that.responsePost = result.data;
                    that.getParser(result.data, that.editPost);
                });
        },
        jsonCompare(responsePost) {
            let that = this;
            let isEqual = true;
            for (let itemRU in responsePost) {
                for (let itemEU in that.editPost) {
                    if (itemRU === itemEU) {
                        if (responsePost[itemRU] !== that.editPost[itemEU]) {
                            isEqual = false;
                        }
                    }
                }
            }
            return isEqual;
        },
        onValidateAll() {
            let that = this;
            PostAccessService.updatePost(that.$route.params.id, that.editPost)
                .then(result => {
                    this.$router.push({
                        name: Constants.ROUTES.POSTS
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
            if (this.jsonCompare(this.responsePost) === true) {
                this.$router.push({
                    name: Constants.ROUTES.POSTS
                });
                return;
            }
            if (v.errors.items.length === 0 && this.jsonCompare(this.responsePost) !== true) {
                this.onValidateAll();
            }
        }
    },
}
</script>
