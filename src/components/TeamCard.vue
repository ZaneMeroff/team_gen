<template>
  <div class="team-card-perimeter-container">

    <p>team #{{ teamId }}</p>

    <ul>
      <li v-for="(member, index) in members" :key="index">{{ member }}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "TeamCard",
    props: {
      members: { type: Array, default: [] },
      teamId: { type: Number, default: 0 },
    },
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

  .team-card-perimeter-container {
    height: auto;
    width: 300px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
    padding-left: 10px;
  }

</style>
