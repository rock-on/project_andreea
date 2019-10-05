<template>
    <v-flex v-if="serviceComponent" xs12 sm4>
        <v-card class="mx-auto">
            <v-img class="white--text" height="200px" :src="serviceComponent.img">
                <v-card-title class="align-end fill-height">
                    <router-link :to="{name: serviceComponent.link}">{{serviceComponent.name}}</router-link>
                </v-card-title>
            </v-img>
            <v-card-text>
                <span class="text--primary">
                    <span>{{serviceComponent.description}}</span>
                </span>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['serviceComponent']
}
</script>