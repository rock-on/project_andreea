<template>
  <div> <v-btn color="primary" :to="{name: constants.ROUTES.POSTS_ADD}">Add Post</v-btn> </div>
</template>

<script>
import Constants from '../../_services/Constants'

export default {
    data: () => ({
      constants: Constants
    })
}
</script>