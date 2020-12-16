<template>
  <div class="npnd-perimeter-container">

    <p class="picker-title">{{ pickerType }}</p>

    <p class="npnd-num">{{ number }}</p>

  </div>
</template>

<script>
  export default {
    name: "NumPickerNumDisplay",
    props: {
      number:      { type: Number, default: 0 },
      pickerType:  { type: String, default: "teams" },
    },
  }
</script>

<style scoped>

  .npnd-num {
    font-size: 3.5rem;
    margin: 10px 0px 0px 30px;
  }

  .npnd-perimeter-container {
    height: 100%;
    width: 50%;
  }

  .picker-title {
    margin: 20px 0px 0px 20px;
  }
</style>
