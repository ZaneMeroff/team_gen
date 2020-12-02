import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from "vuex"

import NameInput from "@/components/NameInput"

// -------- Vuex Setup ------------

const localVue = createLocalVue()
localVue.use(Vuex)
const mutations = { updatePlayerName: jest.fn() }
const store = new Vuex.Store({ mutations })

// --------------------------------

describe("NameInput", () => {

  describe("snapshots", () => {

    it("should render with default props", () => {
      const component = shallowMount(NameInput, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("id", () => {

      it("should have a default value", () => {
        const component = shallowMount(NameInput, store, localVue)

        expect(component.vm.id).toEqual(0)
      })

      it("should accept a number", () => {
        const propsData = { id: 5 }
        const component = shallowMount(NameInput, {
          propsData, store, localVue
        })

        expect(component.vm.id).toEqual(propsData.id)
      })
    })

    describe("playerName", () => {

      it("should have a default value", () => {
        const component = shallowMount(NameInput, store, localVue)

        expect(component.vm.playerName).toEqual("")
      })

      it("should accept a string", () => {
        const propsData = { playerName: "Mike Tyson" }
        const component = shallowMount(NameInput, {
          propsData, store, localVue
        })

        expect(component.vm.playerName).toEqual(propsData.playerName)
      })
    })
  })

  describe("data", () => {

    describe("name", () => {

      it("should have a default value", () => {
        const component = shallowMount(NameInput, store, localVue)

        expect(component.vm.$data.name).toEqual("")
      })
    })
  })

  describe("methods", () => {

    describe("handleInputChange", () => {

      it("should call updatePlayerName with correct values", () => {
        const propsData = { id: 1, playerName: "Mike Tyson" }
        const component = shallowMount(NameInput, {
          propsData, store, localVue
        })

        component.vm.handleInputChange()

        const expected = { id: propsData.id, name: propsData.playerName }
        expect(mutations.updatePlayerName).toHaveBeenCalledWith( {}, expected)
      })
    })
  })

  describe("computed properties", () => {

    describe("playerList", () => {

      it.skip("should return default playerList value", () => {
        // **************************************
        // **************************************
        //  need to figure out how to test this
        // **************************************
        // **************************************
      })
    })
  })

  describe("lifecyle hooks", () => {

    describe("mounted", () => {

      it("should set name if playerName prop is passed", () => {
        const propsData = { playerName: "Tom Cruise" }
        const component = shallowMount(NameInput, {
          propsData, store, localVue
        })
        expect(component.vm.$data.name).toEqual(propsData.playerName)
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should call handleInputChange on change event", () => {
        const spy = jest.spyOn(NameInput.methods, "handleInputChange")
        const component = shallowMount(NameInput, { store, localVue })

        component.find("input").trigger("change")

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
