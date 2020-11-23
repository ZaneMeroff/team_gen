<template>
  <div>

    <NumPickerIndex
      :pickerType="'team'"/>

    <NumPickerIndex
      :pickerType="'player'"/>

  </div>
</template>

<script>
import NumPickerIndex from "./components/NumPicker/NumPickerIndex"

export default {
  name: "App",
  props: {},
  components: {
    NumPickerIndex,
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
