<template>
  <section class="npi-perimeter-container">

    <NumPickerNumDisplay
      :number="pickerType === 'team' ? teamNum : playerNum"
    />

    <div class="arrow-btn-container">
      <NumPickerArrowBtn
        @arrowClick="handleArrowClick('up')"
        :arrowDirection="'up'"
      />
      <NumPickerArrowBtn
        @arrowClick="handleArrowClick('down')"
        :arrowDirection="'down'"
      />
    </div>

  </section>
</template>

<script>
  import NumPickerNumDisplay from "./NumPickerNumDisplay"
  import NumPickerArrowBtn from "./NumPickerArrowBtn"

  export default {
    name: "NumPickerIndex",
    props: {
      pickerType: { type: String, default: "team" },
    },
    components: {
      NumPickerNumDisplay,
      NumPickerArrowBtn,
    },
    data() {
      return {
        // number: 0, //no longer needed!
      }
    },
    methods: {

      handleArrowClick(payload) {
        if (payload === "up") {
          this.$store.commit(`plus${this.pickerType}Num`)
        } else if (payload === "down" && this.pickerType === "team" && this.teamNum !== 0) {
          this.$store.commit("minusteamNum")
        } else if (payload === "down" && this.pickerType === "player" && this.playerNum !== 0) {
          this.$store.commit("minusplayerNum")
        }
      },
    },
    computed: {

      teamNum() {
        return this.$store.state.teamNum
      },

      playerNum() {
        return this.$store.state.playerNum
      },
    },
    watch: {},
  }
</script>

<style scoped>

  .npi-perimeter-container {
    height: 150px;
    width: 150px;
    border: 1px solid #000;
    display: flex;
  }

  .arrow-btn-container {
    display: block;
  }
</style>
