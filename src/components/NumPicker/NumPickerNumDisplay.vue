<template>
  <section class="npnd-perimeter-container">

    <p class="npnd-num">{{ number }}</p>

  </section>
</template>

<script>
  export default {
    name: "NumPickerNumDisplay",
    props: {
      number: { type: Number, default: 0 },
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
</style>
