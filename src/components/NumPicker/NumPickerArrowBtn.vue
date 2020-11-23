<template>

  <button @click="emitArrowBtnClick" class="np-arrow-btn">
    {{ arrowDirection === "up" ? "&#8593" : "&#8595" }}
  </button>

</template>

<script>
  export default {
    name: "NumPickerArrowBtn",
    props: {
      arrowDirection: { type: String, default: "up" },
    },
    components: {},
    data() {
      return {

      }
    },
    methods: {

      emitArrowBtnClick() {
        this.$emit("arrowClick", this.arrowDirection )
      },
    },
    computed: {},
    watch: {},
  }
</script>

<style scoped>

  .np-arrow-btn {
    height: 75px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }

  .np-arrow-btn:hover {
    cursor: pointer;
  }
</style>
