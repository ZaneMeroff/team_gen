<template>
  <form autocomplete="off">

    <input
      @change="handleInputChange"
      v-model="name"
      class="name-input"
      placeholder="player name..."
    />

  </form>
</template>

<script>
  export default {
    name: "NameInput",
    props: {
      id:         { type: Number, default: 0 },
      playerName: { type: String, default: "" },
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
    height: 32px;
    width: 220px;
    display: block;
    border-radius: 16px;
    margin: 10px 0px;
    padding-left: 10px;
    font-size: 1.2rem;
    border: 1px solid #000;
  }

</style>
