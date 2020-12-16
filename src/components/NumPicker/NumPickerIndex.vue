<template>
  <div class="npi-perimeter-container">

    <NumPickerNumDisplay
      :number="pickerType === 'teams' ? teamNum : playerNum"
      :pickerType="pickerType"
    />

    <div class="arrow-btn-container">
      <ArrowBtn
        @arrowClick="handleArrowClick('up')"
        :arrowDirection="'up'"
      />
      <ArrowBtn
        @arrowClick="handleArrowClick('down')"
        :arrowDirection="'down'"
      />
    </div>

  </div>
</template>

<script>
  import NumPickerNumDisplay from "./NumPickerNumDisplay"
  import ArrowBtn from "../ArrowBtn"

  export default {
    name: "NumPickerIndex",
    props: {
      pickerType: { type: String, default: "teams" },
    },
    components: {
      ArrowBtn,
      NumPickerNumDisplay,
    },
    methods: {

      handleArrowClick(payload) {
        if (payload === "up") {
          this.$store.commit(`plus${this.pickerType}Num`)
        } else if (payload === "down") {
          this.$store.commit(`minus${this.pickerType}Num`)
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
  }
</script>

<style scoped>

  .arrow-btn-container {
    display: block;
  }

  .npi-perimeter-container {
    border: 5px dotted #FFF;
    display: flex;
    height: 150px;
    margin: 20px;
    width: 150px;
  }
</style>
