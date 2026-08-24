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
    border: 3px solid rgba(0, 255, 255, 0.6);
    background: linear-gradient(135deg,
      rgba(138, 43, 226, 0.3) 0%,
      rgba(75, 0, 130, 0.4) 50%,
      rgba(0, 206, 209, 0.3) 100%
    );
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.4),
      0 0 40px rgba(255, 20, 147, 0.2),
      inset 0 0 30px rgba(138, 43, 226, 0.3);
    display: flex;
    height: 150px;
    margin: 20px;
    width: 150px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(5px);
  }

  .npi-perimeter-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 10px,
        rgba(0, 255, 255, 0.1) 10px,
        rgba(0, 255, 255, 0.1) 11px
      );
    pointer-events: none;
  }
</style>
