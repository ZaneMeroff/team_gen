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
    color: #FF1493;
    font-weight: 900;
    text-shadow:
      0 0 10px rgba(255, 20, 147, 0.8),
      0 0 20px rgba(255, 20, 147, 0.6),
      0 0 30px rgba(138, 43, 226, 0.4);
  }

  .npnd-perimeter-container {
    height: 100%;
    width: 50%;
  }

  .picker-title {
    margin: 20px 0px 0px 20px;
    color: #00FFFF;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 700;
    text-shadow:
      0 0 8px rgba(0, 255, 255, 0.8),
      0 0 15px rgba(0, 255, 255, 0.4);
  }
</style>
