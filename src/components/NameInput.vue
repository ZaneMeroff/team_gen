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
    background: linear-gradient(135deg,
      rgba(10, 0, 30, 0.9) 0%,
      rgba(26, 0, 51, 0.9) 100%
    );
    border: 2px solid rgba(0, 255, 255, 0.5);
    border-radius: 8px;
    box-shadow:
      0 0 15px rgba(0, 255, 255, 0.4),
      inset 0 0 20px rgba(138, 43, 226, 0.3);
    display: block;
    font-size: 1.2rem;
    height: 36px;
    margin: 0px auto 15px auto;
    padding-left: 15px;
    width: 220px;
    color: #00FFFF;
    font-weight: 700;
    transition: all 0.3s ease;
  }

  .name-input::placeholder {
    color: rgba(0, 255, 255, 0.5);
    font-weight: 400;
  }

  .name-input:focus {
    outline: none;
    border-color: rgba(255, 20, 147, 0.8);
    box-shadow:
      0 0 20px rgba(255, 20, 147, 0.6),
      0 0 40px rgba(0, 255, 255, 0.3),
      inset 0 0 20px rgba(138, 43, 226, 0.4);
    color: #FF1493;
  }

  .name-input:hover {
    border-color: rgba(255, 20, 147, 0.6);
    box-shadow:
      0 0 18px rgba(255, 20, 147, 0.4),
      inset 0 0 20px rgba(138, 43, 226, 0.3);
  }
</style>
