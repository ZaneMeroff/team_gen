<template>
  <form autocomplete="off">

    <input class="name-input" placeholder="name..."/>

  </form>
</template>

<script>
  export default {
    name: "NameInput",
    props: {},
    components: {},
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

  .name-input {
    height: 30px;
    width: 200px;
    display: block;
    border-radius: 5px;
    margin: 10px 0px;
    padding-left: 10px;
  }

</style>
