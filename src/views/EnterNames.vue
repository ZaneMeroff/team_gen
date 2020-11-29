<template>
  <div>

    <router-link class="router-link" to="/">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <router-link class="router-link" to="/displayResults">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <NameInput
      v-for="(player, index) in playerList"
      :key="index"
      :id="index"
      :playerName="player"
    />

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
    methods: {},
    computed: {

      playerList() {
        return this.$store.state.playerList
      },
    },
  }
</script>

<style scoped>

</style>
