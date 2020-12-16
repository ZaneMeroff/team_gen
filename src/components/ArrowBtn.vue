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
          down:  "&#8595",
          left:  "&#x2190",
          right: "&#x2192",
          up:    "&#8593",
        },
      }
    },
    methods: {

      emitArrowBtnClick() {
        this.$emit("arrowClick")
      },

      setArrowDisplay(direction) {
        this.arrowDisplay = this.arrowKey[direction]
      },
    },
    mounted() {
      this.setArrowDisplay(this.arrowDirection)
    },
  }
</script>

<style scoped>

  .arrow-btn {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    font-size: 3rem;
    height: 75px;
    justify-content: center;
    width: 75px;
  }

  .arrow-btn:active {
    color: #FFF;
  }

  .arrow-btn:focus:not(:focus-visible) {
    outline: none;
  }

  .arrow-btn:hover {
    cursor: pointer;
  }

  .nav-arrow-btn {
    background-image: linear-gradient(-180deg, #FF89D6 0%, #C01F9E 100%);
    border: 1px solid #000;
    border-radius: 37.5px;
    box-shadow: 0 1rem 1.25rem 0 rgba(22,75,195,0.50), 0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset;
  }

  span {
    font-family: sans-serif;
    font-size: 3.6rem;
    font-weight: bolder;
  }
</style>
