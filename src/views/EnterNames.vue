<template>
  <div>

    <router-link class="router-link" to="/">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <router-link class="router-link" to="/displayResults">
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
  // need spec with snapshot

  import ArrowBtn from "../components/ArrowBtn"

  export default {
    name: "EnterNames",
    components: {
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
