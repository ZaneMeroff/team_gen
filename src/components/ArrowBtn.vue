<template>

  <button
    @click="emitArrowBtnClick"
    :class="arrowDirection === 'up' || arrowDirection === 'down' ? 'arrow-btn' : 'arrow-btn nav-arrow-btn'">
    <span v-html="arrowDisplay"></span>
  </button>

</template>

<script>
  export default {
    name: "ArrowBtn",
    props: {
      arrowDirection: { type: String, default: "up" },
    },
    data() {
      return {
        arrowDisplay: "",
        arrowKey: {
          up:    "&#8593",
          down:  "&#8595",
          left:  "&#x2190",
          right: "&#x2192",
        },
      }
    },
    methods: {

      setArrowDisplay(direction) {
        this.arrowDisplay = this.arrowKey[direction]
      },

      emitArrowBtnClick() {
        this.$emit("arrowClick")
      },
    },
    mounted() {
      this.setArrowDisplay(this.arrowDirection)
    },
  }
</script>

<style scoped>

  .arrow-btn {
    height: 75px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border: none;
    background-color: transparent;
  }

  .arrow-btn:focus:not(:focus-visible) {
    outline: none;
  }

  .nav-arrow-btn {
    border-radius: 37.5px;
    border: 1px solid #000;
    background-image: linear-gradient(-180deg, #FF89D6 0%, #C01F9E 100%);
    box-shadow: 0 1rem 1.25rem 0 rgba(22,75,195,0.50), 0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset;
  }

  .arrow-btn:hover {
    cursor: pointer;
  }

  span {
    font-family: sans-serif;
  }

</style>
