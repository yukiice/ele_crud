<template>
  <div>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title
        >Application
        <v-btn depressed color="primary" @click="clickToPath"> Primary </v-btn>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: [],
  data() {
    return {};
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    clickToPath(){
      this.$router.push('/honor')
    }
  },
};
</script>

<style lang="sass" scoped></style>
