<template>
  <section class="npnd-perimeter-container">

    <p class="picker-title">{{ pickerType }}</p>

    <p class="npnd-num">{{ number }}</p>

  </section>
</template>

<script>
  export default {
    name: "NumPickerNumDisplay",
    props: {
      number: { type: Number, default: 0 },
      pickerType: { type: String, default: "teams" },
    },
  }
</script>

<style scoped>

  .npnd-perimeter-container {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .npnd-num {
    font-size: 3.5rem;
    font-weight: bold;
    font-family: courier;
  }

  .picker-title {
    position: absolute;
    margin-bottom: 90px;

  }

</style>
