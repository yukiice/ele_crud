<template>
  <v-app>
    <Header />
    <v-main class="pd">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/content/Header";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.pd{
  padding: 0;
}
</style>
