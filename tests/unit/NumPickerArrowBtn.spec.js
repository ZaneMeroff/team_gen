import { shallowMount } from '@vue/test-utils'

import NumPickerArrowBtn from "@/components/NumPicker/NumPickerArrowBtn"

describe("NumPickerArrowBtn", () => {

  describe("snapshots", () => {

    it("should render with default props", () => {
      const component = shallowMount(NumPickerArrowBtn)

      expect(component.element).toMatchSnapshot()
    })

    it("should set arrowDirection when prop is passed", () => {
      const propsData = { arrowDirection: "down" }
      const component = shallowMount(NumPickerArrowBtn, { propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("arrowDirection", () => {

      it("should have a default value", () => {
        const component = shallowMount(NumPickerArrowBtn)

        expect(component.vm.arrowDirection).toEqual("up")
      })

      it("should accept a string", () => {
        const propsData = { arrowDirection: "down" }
        const component = shallowMount(NumPickerArrowBtn, { propsData })

        expect(component.vm.arrowDirection).toEqual(propsData.arrowDirection)
      })
    })
  })

  describe("methods", () => {

    describe("emitArrowBtnClick", () => {

      it("should emit arrowClick with correct payload", () => {
        const component = shallowMount(NumPickerArrowBtn)

        component.vm.emitArrowBtnClick()

        const expected = { "arrowClick": [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should emit arrowClick when button is clicked", () => {
        const component = shallowMount(NumPickerArrowBtn)

        component.find(".np-arrow-btn").trigger("click")

        const expected = { "arrowClick": [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })
  })
})
