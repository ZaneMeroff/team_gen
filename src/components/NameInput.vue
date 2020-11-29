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
      id: { type: Number, default: 0 },
      playerName: { type: String, default: "" },
    },
    components: {},
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
    watch: {},
    mounted() {
      if ( this.playerName ) {
        this.name = this.playerName
      }
    },
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
