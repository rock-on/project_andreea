<template>
  <v-container fluid grid-list-xl pa-3>
      <v-layout text-xs-center row wrap>
          <service-component 
            v-for="serviceObj in servicesData"
            :serviceComponent="serviceObj"
            :key="serviceObj.id"></service-component>
      </v-layout>
  </v-container>
</template>

<script>
import Constants from '../_services/Constants'
import Services from '../_services/Services'
import ServiceComponent from '../components/ServiceComponent/ServiceComponent'


export default {
    components: {
        ServiceComponent
    },
    data: () => ({
        constants: Constants,
        servicesData: Services.services,
    })
}
</script>
