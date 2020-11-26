<template>
  <div>

    <router-link class="router-link" to="/">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <router-link class="router-link" to="/displayResults">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <NameInput v-for="player in playerNum"/>

  </div>
</template>

<script>
  // need spec with snapshot

  import ArrowBtn from "../components/ArrowBtn"
  import NameInput from "../components/NameInput"

  export default {
    name: "EnterNames",
    components: {
      ArrowBtn,
      NameInput,
    },
    computed: {

      playerNum() {
        return this.$store.state.playerNum
      },
    },
  }
</script>

<style scoped>

</style>
