<template>
  <div>

    <ArrowBtn
      :arrowDirection="'left'"/>

    <ArrowBtn
      :arrowDirection="'right'"/>

    <NumPickerIndex
      :pickerType="'team'"/>

    <NumPickerIndex
      :pickerType="'player'"/>

  </div>
</template>

<script>
import NumPickerIndex from "./components/NumPicker/NumPickerIndex"
import ArrowBtn from "./components/ArrowBtn"

export default {
  name: "App",
  props: {},
  components: {
    NumPickerIndex,
    ArrowBtn,
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style>

  * {
    margin: 0px;
    padding: 0px;
  }

</style>
