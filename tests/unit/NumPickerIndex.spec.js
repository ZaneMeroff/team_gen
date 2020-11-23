import { mount, shallowMount } from '@vue/test-utils'

import NumPickerIndex from "@/components/NumPicker/NumPickerIndex"
import NumPickerArrowBtn from "@/components/NumPicker/NumPickerArrowBtn"

describe("NumPickerIndex", () => {

  describe("snapshots", () => {

    it("should render with default props", () => {
      const component = shallowMount(NumPickerIndex)

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("pickerType", () => {

      it("should have a default value", () => {
        const component = shallowMount(NumPickerIndex)

        expect(component.vm.pickerType).toEqual("team")
      })

      it("should accept a string", () => {
        const propsData = { pickerType: "player" }
        const component = shallowMount(NumPickerIndex, { propsData })

        expect(component.vm.pickerType).toEqual(propsData.pickerType)
      })
    })
  })

  describe("methods", () => {

    describe("handleArrowClick", () => {

      it("should increase prop:number if payload is 'up'", () => {
        const component = shallowMount(NumPickerIndex)
        const before = component.vm.$data.number

        component.vm.handleArrowClick("up")

        const after = component.vm.$data.number

        expect(before).toEqual(0)
        expect(after).toEqual(1)
      })

      it("should decrease prop:number if payload is 'down' and number !== 0", () => {
        const component = shallowMount(NumPickerIndex)
        component.vm.$data.number = 5

        component.vm.handleArrowClick("down")

        expect(component.vm.$data.number).toEqual(4)
      })

      it("should not change prop:number if payload is 'down' and number === 0", () => {
        const component = shallowMount(NumPickerIndex)
        const before = component.vm.$data.number

        component.vm.handleArrowClick("down")

        const after = component.vm.$data.number

        expect(before).toEqual(after)
      })

      it("should not change prop:number if payload is 'lollygag'", () => {
        const component = shallowMount(NumPickerIndex)
        const before = component.vm.$data.number

        component.vm.handleArrowClick("lollygag")

        const after = component.vm.$data.number

        expect(before).toEqual(after)
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should call handleArrowClick when arrowClick is emitted", () => {
        const component = mount(NumPickerIndex)
        const spy = jest.spyOn(component.vm, "handleArrowClick")
        const numPickerArrowBtn = component.findComponent(NumPickerArrowBtn)

        numPickerArrowBtn.vm.$emit("arrowClick")

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
