<template>
  <section class="npnd-perimeter-container">
    <p class="npnd-num">{{ number }}</p>
  </section>
</template>

<script>
  export default {
    name: "NumPickerNumDisplay",
    props: {},
    components: {},
    data() {
      return {
        number: 0,
      }
    },
    methods: {},
    computed: {},
    watch: {},
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
    font-size: 3rem;
  }

</style>
