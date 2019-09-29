<template>
<form>
    <v-text-field v-model="post.title" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('title')" label="Title" data-vv-name="title" required></v-text-field>
    <v-text-field v-model="post.subtitle" v-validate="'required|min:2|max:100'" :error-messages="errors.collect('subtitle')" label="Subtitle" data-vv-name="subtitle" required></v-text-field>
    <v-text-field v-model="post.text" v-validate="'required|min:2|max:200'" :error-messages="errors.collect('text')" label="Text" data-vv-name="text" required></v-text-field>

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
        post: {
            title: null,
            subtitle: null,
            text: null
        },
        dictionary: FormErrorFactory.postErrorMessages
    }),

    mounted() {
        this.$validator.localize('en', this.dictionary)
    },

    methods: {
        onValidateAll() {
            let newItem = {
                title: this.post.title,
                subtitle: this.post.subtitle,
                text: this.post.text,
            };

            PostAccessService.addPost(newItem)
                .then(result => {
                    console.log('Postarea a fost adaugata cu succes');
                    this.$router.push({
                        name: Constants.ROUTES.POSTS
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
