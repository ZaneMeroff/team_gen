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
      members:  { type: Array, default: () => [] },
      teamId:   { type: Number, default: 0 },
    },
  }
</script>

<style scoped>

  .team-card-perimeter-container {
    background-color: #FFF;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 1rem rgba(110, 15, 155, .8) inset;
    height: auto;
    margin: 0px auto 20px auto;
    padding: 10px;
    width: 220px;
  }

  ul {
    margin: 4px 0px 4px 20px;
  }
</style>
