<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <router-link :to="{name: constants.ROUTES.HOME}">Home</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <router-link :to="{name: constants.ROUTES.USERS}">Users</router-link>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <router-link :to="{name: constants.ROUTES.POSTS}">Posts</router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import Constants from '../_services/Constants';

export default {
    data: () => ({
      constants: Constants,
      drawer: false,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
};
</script>