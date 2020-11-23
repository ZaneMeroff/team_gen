<template>
  <section class="npi-perimeter-container">

    <NumPickerNumDisplay
      :number="number"
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
      pickerType: { type: String, default: "team" }, //not using this yet
    },
    components: {
      NumPickerNumDisplay,
      NumPickerArrowBtn,
    },
    data() {
      return {
        number: 0,
      }
    },
    methods: {

      handleArrowClick(payload) {
        if (payload === "up") {
          this.number++
        } else if (payload === "down" && this.number !== 0)
          this.number--
      },
    },
    computed: {},
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
