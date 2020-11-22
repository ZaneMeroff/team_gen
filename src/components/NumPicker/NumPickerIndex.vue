<template>
  <section class="npi-perimeter-container">

    <NumPickerNumDisplay />

  </section>
</template>

<script>
  import NumPickerNumDisplay from "./NumPickerNumDisplay"

  export default {
    name: "NumPickerIndex",
    props: {},
    components: {
      NumPickerNumDisplay,
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
  }

</style>
