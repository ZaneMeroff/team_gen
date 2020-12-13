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
      NumPickerNumDisplay,
      ArrowBtn,
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

      teamNum() {
        return this.$store.state.teamNum
      },

      playerNum() {
        return this.$store.state.playerNum
      },
    },
  }
</script>

<style scoped>

  .npi-perimeter-container {
    height: 150px;
    width: 150px;
    border: 5px dotted #FFF;
    display: flex;
    margin: 20px;
  }

  .arrow-btn-container {
    display: block;
  }
  
</style>
