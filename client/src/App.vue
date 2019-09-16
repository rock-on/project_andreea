<template>
  <v-app id="inspire">
    <Header></Header>

    <v-content>
      <div class="pa-5"><router-view /></div>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
