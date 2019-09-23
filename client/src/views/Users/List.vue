<template>
  <div> 
    <v-container>
      <v-row>
        <v-col class="pa-0">
          <v-btn color="primary" :to="{name: constants.ROUTES.HOME}">Back to Home</v-btn>
        </v-col>
        <div class="flex-grow-1"></div>
        <v-col class="text-right pa-0">
          <v-btn color="red" :to="{name: constants.ROUTES.USERS_ADD}">Add User</v-btn> 
        </v-col>
      </v-row>
    </v-container>
    <v-card>
      <v-card-title>
        Users
        <div class="flex-grow-1"></div>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search" 
        :loading="loading"
        loading-text="Asteptati... Se incarca utilizatorii"
      >
        <template v-slot:item.index="{ item }">
            <span>{{ items.map(function(x) {return x._id; }).indexOf(item._id) + 1 }}</span>
        </template> 
        <template v-slot:item.option="{ item }">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  text
                  icon
                  large
                >
                  <v-icon dark>settings_applications</v-icon>
                </v-btn>
              </template>

              <v-list class="pa-0">
                  <v-btn width="160" block :to="{name: constants.ROUTES.USERS_UPDATE, params: { id: item._id }}">Edit <v-icon class="ml-auto" dark>edit</v-icon></v-btn>
                  <v-btn width="160" block @click="showModal(item._id, item.fname, item.lname)">Delete <v-icon class="ml-auto" dark>delete</v-icon></v-btn>
              </v-list>
            </v-menu>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" width="500">
      <v-card>
          <v-card-title class="headline mb-4" primary-title>
              Delete Confirmation
          </v-card-title>

          <v-card-text class="mb-5">
              Are you sure do you want to delete <span class="primary--text">{{ this.itemName }}</span> ?
          </v-card-text>

          <v-divider></v-divider>

          <div class="text-right pa-2">
            <v-btn class="mr-2" color="black" text @click="dialog=false">Cancel</v-btn>
            <v-btn color="primary" @click="deleteUser()">Yes, I'm sure</v-btn>
          </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Constants from '../../_services/Constants';
import UserAccessService from '../../_services/UserAccessService';

export default {
    data: () => ({
      constants: Constants,
      search: '',
      loading: true,
      headers: [
        { text: '', value: 'option' },
        { text: '#', sortable: false, value: 'index' },
        { text: 'First Name', value: 'fname' },
        { text: 'Last Name', value: 'lname' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
      ],
      items: [],
      itemId: null,
      itemName: null,
      dialog: false
    }),
    mounted() {
      this.onGetItems();
      
    },
    methods: {
      showModal: function (id, fname, lname) {
        this.itemId = id;
        this.itemName = fname + ' ' + lname;
        this.dialog = true;
      },
      onGetItems: function () {
        UserAccessService.getUsers()
            .then(result => {
                this.items = result.data;
                this.loading = false;
            })
            .catch(err => reject(err));
      },
      deleteUser: function () {
        UserAccessService.deleteUser(this.itemId)
          .then(res => {
              this.onGetItems();
              this.dialog = false;
          });
      },
    }
}
</script>