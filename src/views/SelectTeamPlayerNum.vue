<template>
  <div>

    <ArrowBtn
      :disabled="true"
      :arrowDirection="'left'"/>

    <div @click="validateInputs">
      <ArrowBtn :arrowDirection="'right'"/>
    </div>

    <p v-if="showErr">Sorry, you can't have more teams than players!</p>

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
    data() {
      return {
        showErr: false,
      }
    },
    methods: {

      validateInputs() {
        if ( this.teamNum > this.playerNum ) {
          this.showErr = true
        } else {
          this.$router.push("/enterNames")
        }
      },
    },
    computed: {

      playerNum() {
        return this.$store.state.playerNum
      },
      teamNum() {
        return this.$store.state.teamNum
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
