<template>
  <form v-on:submit.prevent="onSubmit" autocomplete="off">

    <input
      @change="handleInputChange"
      class="name-input"
      placeholder="player name..."
      v-model="name"
    />

  </form>
</template>

<script>
  export default {
    name: "NameInput",
    props: {
      id:          { type: Number, default: 0 },
      playerName:  { type: String, default: "" },
    },
    data() {
      return {
        name: "",
      }
    },
    methods: {

      handleInputChange() {
        this.$store.commit("updatePlayerName", {id: this.id, name: this.name})
      }
    },
    computed: {
      playerList() {
        return this.$store.state.playerList
      },
    },
    mounted() {
      if ( this.playerName ) {
        this.name = this.playerName
      }
    },
  }
</script>

<style scoped>

  .name-input {
    background-color: #FFF;
    border: 1px solid #000;
    border-radius: 16px;
    box-shadow: 0 0 1rem rgba(110, 15, 155, .6) inset;
    display: block;
    font-size: 1.2rem;
    height: 32px;
    margin: 0px auto 10px auto;
    padding-left: 10px;
    width: 220px;
  }
</style>
