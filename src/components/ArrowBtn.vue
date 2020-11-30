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
    padding-bottom: 7px;
  }

  .nav-arrow-btn {
    border-radius: 37.5px;
  }

  .arrow-btn:hover {
    cursor: pointer;
  }
</style>
