<template>
  <div>

    <ArrowBtn
      :arrowDirection="'left'"/>

    <router-link class="router-link" to="/enterNames">
      <ArrowBtn :arrowDirection="'right'"/>
    </router-link>

    <NumPickerIndex
      :pickerType="'team'"/>

    <NumPickerIndex
      :pickerType="'player'"/>

  </div>
</template>

<script>
  // need spec with snapshot

  import ArrowBtn from "../components/ArrowBtn"
  import NumPickerIndex from "../components/NumPicker/NumPickerIndex"

  export default {
    name: "SelectTeamPlayerNum",
    components: {
      NumPickerIndex,
      ArrowBtn,
    },
  }
</script>

<style scoped>

</style>
