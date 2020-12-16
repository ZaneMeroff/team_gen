<template>
  <div class="enter-names-container">

    <div class="nav-btn-container">
      <router-link class="router-link" to="/">
        <ArrowBtn :arrowDirection="'left'"/>
      </router-link>

      <div id="right-arrow" @click="validateInputs">
        <ArrowBtn :arrowDirection="'right'"/>
      </div>
    </div>

    <div class="err-msg">
      <p v-if="showErr">please enter a name for every player</p>
    </div>

    <div class="name-inputs-container">
      <NameInput
        v-for="(player, index) in playerList"
        :id="index"
        :key="index"
        :playerName="player"
      />
    </div>

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

      evaluateError(error) {
        if ( !error ) {
          this.$router.push("/displayResults")
            .catch(() => {})
        } else {
          this.showErr = true
        }
      },

      validateInputs() {
        let error = false
        this.playerList.forEach(input => {
          if ( !input.length ) { error = true }
        })
        this.evaluateError(error)
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

  .enter-names-container {
    height: auto;
  }

  .name-inputs-container {
    height: auto;
    width: auto;
  }
</style>
