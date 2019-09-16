<template>
  <div> <v-btn color="primary" :to="{name: constants.ROUTES.USERS_ADD}">Add User</v-btn> </div>
</template>

<script>
import Constants from '../../_services/Constants'

export default {
    data: () => ({
      constants: Constants
    })
}
</script>