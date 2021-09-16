<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <chat/>
  </div>
</template>

<script>
import Chat from './views/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat
  },
  mounted() {
    this.$store.dispatch('getSentMessages');
  }
}
</script>

<style>

</style>
