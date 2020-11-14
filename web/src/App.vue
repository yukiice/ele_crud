<template>
  <v-app>
    
    <v-main class="pd">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {

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
