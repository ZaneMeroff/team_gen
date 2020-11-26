<template>
  <div>

    <router-link class="router-link" to="/enterNames">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <ArrowBtn :arrowDirection="'right'"/>

  </div>
</template>

<script>
  // need spec with snapshot
  
  import ArrowBtn from "../components/ArrowBtn"

  export default {
    name: "DisplayResults",
    components: {
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
