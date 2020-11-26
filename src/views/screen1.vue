<template>
  <div>

    <ArrowBtn
      :arrowDirection="'left'"/>

    <router-link class="router-link" to="/screen2">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <NumPickerIndex
      :pickerType="'team'"/>

    <NumPickerIndex
      :pickerType="'player'"/>

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"
  import NumPickerIndex from "../components/NumPicker/NumPickerIndex"

  export default {
    name: "Screen1",
    components: {
      NumPickerIndex,
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
