import { shallowMount } from '@vue/test-utils'

import NumPickerNumDisplay from "@/components/NumPicker/NumPickerNumDisplay"

describe("NumPickerNumDisplay", () => {

  describe("snapshots", () => {

    it("should render with default props", () => {
      const component = shallowMount(NumPickerNumDisplay)

      expect(component.element).toMatchSnapshot()
    })

    it("should set number prop", () => {
      const propsData = { number: 5 }
      const component = shallowMount(NumPickerNumDisplay, { propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("number", () => {

      it("should have a default value", () => {
        const component = shallowMount(NumPickerNumDisplay)

        expect(component.vm.number).toEqual(0)
      })

      it("should accept a number", () => {
        const propsData = { number: 5 }
        const component = shallowMount(NumPickerNumDisplay, { propsData })

        expect(component.vm.number).toEqual(propsData.number)
      })
    })
  })
})
