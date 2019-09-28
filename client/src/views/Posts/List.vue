<template>
<div>
    <v-container>
        <v-row>
            <v-col class="pa-0">
                <v-btn color="primary" :to="{name: constants.ROUTES.HOME}">Back to Home</v-btn>
            </v-col>
            <div class="flex-grow-1"></div>
            <v-col class="text-right pa-0">
                <v-btn color="red" :to="{name: constants.ROUTES.POSTS_ADD}">Add Post</v-btn>
            </v-col>
        </v-row>
    </v-container>
    
</div>
</template>

<script>
import Constants from '../../_services/Constants'

export default {
    data: () => ({
        constants: Constants
    })
}
</script>
