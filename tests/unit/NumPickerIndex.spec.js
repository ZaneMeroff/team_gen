import ArrowBtn from "@/components/ArrowBtn"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import NumPickerIndex from "@/components/NumPicker/NumPickerIndex"
import store from "@/store/index"
import Vuex from "vuex"

// -------- Vuex Setup ------------

const localVue = createLocalVue()
localVue.use(Vuex)

// --------------------------------

describe("NumPickerIndex", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(NumPickerIndex, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })

    it("should render with default html", () => {
      const propsData = { pickerType: "players" }
      const component = shallowMount(NumPickerIndex, {
        propsData, store, localVue
      })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("pickerType", () => {

      it("should have a default value", () => {
        const component = shallowMount(NumPickerIndex, { store, localVue })

        expect(component.vm.pickerType).toEqual("teams")
      })

      it("should accept a string", () => {
        const propsData = { pickerType: "players" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })

        expect(component.vm.pickerType).toEqual(propsData.pickerType)
      })
    })
  })

  describe("methods", () => {

    describe("handleArrowClick", () => {

      it("should increase teamNum in store if payload is 'up'", () => {
        const propsData = { pickerType: "teams" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        const before = store.state.teamNum

        component.vm.handleArrowClick("up")

        const after = store.state.teamNum

        expect(before).toEqual(2)
        expect(after).toEqual(3)
      })

      it("should increase playerNum in store if payload is 'up'", () => {
        const propsData = { pickerType: "players" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        const before = store.state.playerNum

        component.vm.handleArrowClick("up")

        const after = store.state.playerNum

        expect(before).toEqual(2)
        expect(after).toEqual(3)
      })

      it("should decrease teamNum in store if payload is 'down'", () => {
        const propsData = { pickerType: "teams" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        store.state.teamNum = 5
        const before = store.state.teamNum

        component.vm.handleArrowClick("down")

        const after = store.state.teamNum

        expect(before).toEqual(5)
        expect(after).toEqual(4)
      })

      it("should decrease playerNum in store if payload is 'down'", () => {
        const propsData = { pickerType: "players" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        store.state.playerNum = 5
        const before = store.state.playerNum

        component.vm.handleArrowClick("down")

        const after = store.state.playerNum

        expect(before).toEqual(5)
        expect(after).toEqual(4)
      })

      it("should NOT decrease teamNum in store if value is 2", () => {
        const propsData = { pickerType: "teams" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        store.state.teamNum = 2
        const before = store.state.teamNum

        component.vm.handleArrowClick("down")

        const after = store.state.teamNum

        expect(before).toEqual(2)
        expect(after).toEqual(2)
      })

      it("should NOT decrease playerNum in store if value is 2", () => {
        const propsData = { pickerType: "players" }
        const component = shallowMount(NumPickerIndex, {
          propsData, store, localVue
        })
        store.state.playerNum = 2
        const before = store.state.playerNum

        component.vm.handleArrowClick("down")

        const after = store.state.playerNum

        expect(before).toEqual(2)
        expect(after).toEqual(2)
      })
    })
  })

  describe("computed properties", () => {

    describe("teamNum", () => {

      it("should return default teamNum of 2", () => {
        const component = shallowMount(NumPickerIndex, { store, localVue })

        const expected = 2
        expect(component.vm.teamNum).toEqual(expected)
      })
    })

    describe("playerNum", () => {

      it("should return default playerNum of 2", () => {
        const component = shallowMount(NumPickerIndex, { store, localVue })

        const expected = 2
        expect(component.vm.playerNum).toEqual(expected)
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should call handleArrowClick when arrowClick is emitted", () => {
        const component = mount(NumPickerIndex, { store, localVue })
        const spy = jest.spyOn(component.vm, "handleArrowClick")
        const arrowBtn = component.findComponent(ArrowBtn)

        arrowBtn.vm.$emit("arrowClick")

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
