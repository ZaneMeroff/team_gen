<template>
  <div>

    <router-link class="router-link" to="/">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <div id="right-arrow" @click="validateInputs">
      <ArrowBtn :arrowDirection="'right'"/>
    </div>

    <p v-if="showErr">Please enter a name for every player</p>

    <NameInput
      v-for="(player, index) in playerList"
      :key="index"
      :id="index"
      :playerName="player"
    />

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"
  import NameInput from "../components/NameInput"

  export default {
    name: "EnterNames",
    components: {
      ArrowBtn,
      NameInput,
    },
    data() {
      return {
        showErr: false,
      }
    },
    methods: {

      validateInputs() {
        let error = false
        this.playerList.forEach(input => {
          if ( !input.length ) { error = true }
        })
        this.evaluateError(error)
      },

      evaluateError(error) {
        if ( !error ) {
          this.$router.push("/displayResults")
        } else {
          this.showErr = true
        }
      },
    },
    computed: {

      playerList() {
        return this.$store.state.playerList
      },
    },
  }
</script>

<style scoped>

</style>
