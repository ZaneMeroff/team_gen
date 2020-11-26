<template>
  <div>

    <router-link class="router-link" to="/screen2">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <ArrowBtn :arrowDirection="'right'"/>

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"

  export default {
    name: "Screen3",
    components: {
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
