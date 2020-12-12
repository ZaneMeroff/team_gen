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
      members: { type: Array, default: () => [] },
      teamId:  { type: Number, default: 0 },
    },
  }
</script>

<style scoped>

  ul {
    margin-left: 20px;
  }

  .team-card-perimeter-container {
    height: auto;
    width: 250px;
    border: 1px solid black;
    margin: 20px 0px;
    border-radius: 10px;
    padding: 10px;
    background-color: #FFF;
  }

</style>
