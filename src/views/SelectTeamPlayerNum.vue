<template>
  <div>

    <ArrowBtn
      :disabled="true"
      :arrowDirection="'left'"/>

    <router-link class="router-link" to="/enterNames">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <NumPickerIndex
      :pickerType="'team'"/>

    <NumPickerIndex
      :pickerType="'player'"/>

  </div>
</template>

<script>
  // need spec with snapshot

  import ArrowBtn from "../components/ArrowBtn"
  import NumPickerIndex from "../components/NumPicker/NumPickerIndex"

  export default {
    name: "SelectTeamPlayerNum",
    components: {
      NumPickerIndex,
      ArrowBtn,
    },
    computed: {

      playerNum() {
        return this.$store.state.playerNum
      },
    },
    watch: {
      playerNum() {
        let players = []
        for (let i = 1; i <= this.playerNum; i++) {
          players.push("")
        }
        this.$store.commit("updatePlayerList", players)
      },
    },
  }
</script>

<style scoped>

</style>
