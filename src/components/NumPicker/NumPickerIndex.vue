<template>
  <section class="npi-perimeter-container">

    <NumPickerNumDisplay
      :number="pickerType === 'team' ? teamNum : playerNum"
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

  </section>
</template>

<script>
  import NumPickerNumDisplay from "./NumPickerNumDisplay"
  import ArrowBtn from "../ArrowBtn"

  export default {
    name: "NumPickerIndex",
    props: {
      pickerType: { type: String, default: "team" },
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
    border: 1px solid #000;
    display: flex;
  }

  .arrow-btn-container {
    display: block;
  }
</style>
