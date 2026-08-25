<template>

  <button
    @click="emitArrowBtnClick"
    :class="arrowDirection === 'up' || arrowDirection === 'down' ? 'arrow-btn' : 'arrow-btn nav-arrow-btn'">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polygon :points="arrowDisplay"/>
    </svg>
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
          down:  "12,20 3,5 21,5",
          left:  "4,12 19,3 19,21",
          right: "20,12 5,21 5,3",
          up:    "12,4 21,19 3,19",
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
    height: 75px;
    justify-content: center;
    width: 75px;
    color: #00FFFF;
    transition: all 0.3s ease;
  }

  .arrow-btn:active {
    color: #FF1493;
    transform: scale(0.95);
  }

  .arrow-btn:active svg {
    filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1));
  }

  .arrow-btn:focus:not(:focus-visible) {
    outline: none;
  }

  .arrow-btn:hover {
    cursor: pointer;
    color: #FF1493;
  }

  .arrow-btn:hover svg {
    filter: drop-shadow(0 0 15px rgba(255, 20, 147, 0.8));
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

  svg {
    fill: currentColor;
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.8));
    height: 2.5rem;
    position: relative;
    transition: filter 0.3s ease;
    width: 2.5rem;
    z-index: 1;
  }
</style>
