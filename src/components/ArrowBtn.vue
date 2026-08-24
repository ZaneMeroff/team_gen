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
    color: #00FFFF;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  .arrow-btn:active {
    color: #FF1493;
    text-shadow: 0 0 15px rgba(255, 20, 147, 1);
    transform: scale(0.95);
  }

  .arrow-btn:focus:not(:focus-visible) {
    outline: none;
  }

  .arrow-btn:hover {
    cursor: pointer;
    color: #FF1493;
    text-shadow: 0 0 15px rgba(255, 20, 147, 0.8);
  }

  .nav-arrow-btn {
    background: linear-gradient(135deg,
      rgba(138, 43, 226, 0.8) 0%,
      rgba(255, 20, 147, 0.8) 50%,
      rgba(0, 206, 209, 0.8) 100%
    );
    border: 2px solid rgba(0, 255, 255, 0.6);
    border-radius: 37.5px;
    box-shadow:
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(255, 20, 147, 0.3),
      inset 0 0 20px rgba(138, 43, 226, 0.3);
    position: relative;
    overflow: hidden;
  }

  .nav-arrow-btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
  }

  .nav-arrow-btn:hover {
    box-shadow:
      0 0 30px rgba(0, 255, 255, 0.8),
      0 0 60px rgba(255, 20, 147, 0.5),
      inset 0 0 30px rgba(138, 43, 226, 0.5);
    border-color: rgba(255, 20, 147, 0.8);
  }

  span {
    font-family: sans-serif;
    font-size: 3.6rem;
    font-weight: bolder;
    position: relative;
    z-index: 1;
  }
</style>
