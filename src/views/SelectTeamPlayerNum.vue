<template>
  <div class="select-team-player-num-container">

    <div class="nav-btn-container">
      <ArrowBtn
        :arrowDirection="'left'"
        :disabled="true"
      />

      <div id="right-arrow" @click="validateInputs">
        <ArrowBtn :arrowDirection="'right'"/>
      </div>
    </div>

    <div class="err-msg">
      <p v-if="showErr">you can't have more teams than players</p>
    </div>

    <div class="pickers-container">
      <NumPickerIndex
        :pickerType="'teams'"/>

      <NumPickerIndex
        :pickerType="'players'"/>
    </div>

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"
  import NumPickerIndex from "../components/NumPicker/NumPickerIndex"

  export default {
    name: "SelectTeamPlayerNum",
    components: {
      ArrowBtn,
      NumPickerIndex,
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
            .catch(() => {})
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

  .pickers-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .select-team-player-num-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
