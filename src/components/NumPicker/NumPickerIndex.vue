<template>
  <section class="npi-perimeter-container">

    <NumPickerNumDisplay />

    <div class="arrow-btn-container">
      <NumPickerArrowBtn :arrowDirection="'up'" />
      <NumPickerArrowBtn :arrowDirection="'down'" />
    </div>

  </section>
</template>

<script>
  import NumPickerNumDisplay from "./NumPickerNumDisplay"
  import NumPickerArrowBtn from "./NumPickerArrowBtn"

  export default {
    name: "NumPickerIndex",
    props: {},
    components: {
      NumPickerNumDisplay,
      NumPickerArrowBtn,
    },
    data() {
      return {

      }
    },
    methods: {},
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
