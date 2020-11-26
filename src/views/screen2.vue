<template>
  <div>

    <router-link class="router-link" to="/">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <router-link class="router-link" to="/screen3">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <input style="display:block" placeholder="name 1"/>
    <input style="display:block" placeholder="name 2"/>
    <input style="display:block" placeholder="name 3"/>
    <input style="display:block" placeholder="name 4"/>
    <input style="display:block" placeholder="name 5"/>

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"

  export default {
    name: "Screen2",
    components: {
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
