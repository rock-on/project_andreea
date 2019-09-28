<template>
  <div>
    <v-btn color="primary" class="mr-2" :to="{name: constants.ROUTES.USERS}">Go to Users</v-btn>
    <v-btn color="primary" :to="{name: constants.ROUTES.POSTS}">Go to Posts</v-btn>
  </div>
</template>

<script>
import Constants from '../_services/Constants'

export default {
    data: () => ({
      constants: Constants
    })
}
</script>
