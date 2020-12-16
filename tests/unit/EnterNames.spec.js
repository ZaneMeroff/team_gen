import { createLocalVue, shallowMount } from "@vue/test-utils"
import store from "@/store/index"
import Vuex from "vuex"
import VueRouter from "vue-router"
import EnterNames from "@/views/EnterNames"

// --------- Vuex & Router setup ------------

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(Vuex)
localVue.use(VueRouter)

// ------------------------------------------

describe("EnterNames", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(EnterNames, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })

    it("should render error message if showErr is true", () => {
      const component = shallowMount(EnterNames, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })

    it("should render with NameInputs from playerList", () => {
      store.state.playerList = ["Ned", "Ted", "Sue"]
      const component = shallowMount(EnterNames, { store, localVue })

      expect(component.element).toMatchSnapshot()
      store.state.playerList = ["", ""]
    })
  })

  describe("data", () => {

    describe("showErr", () => {

      it("should return a default value", () => {
        const component = shallowMount(EnterNames, { store, localVue })

        expect(component.vm.$data.showErr).toEqual(false)
      })
    })
  })

  describe("methods", () => {

    describe("validateInputs", () => {

      it("should call evaluateError with true if playerList contains an empty string", () => {
        const component = shallowMount(EnterNames, { store, localVue })
        const spy = jest.spyOn(component.vm, "evaluateError")

        component.vm.validateInputs()

        expect(spy).toHaveBeenCalledWith(true)
      })

      it("should call evaluateError with false if playerList doesn't contain an empty string", () => {
        const component = shallowMount(EnterNames, { store, localVue, router })
        const spy = jest.spyOn(component.vm, "evaluateError")

        store.state.playerList = [ "Bob", "Joe" ]
        component.vm.validateInputs()

        expect(spy).toHaveBeenCalledWith(false)
        store.state.playerList = ["", ""]
      })
    })

    describe("evaluateError", () => {

      it("should route to displayResults if error is false", () => {
        const component = shallowMount(EnterNames, { store, localVue, router })

        component.vm.evaluateError(false)

        const result = component.vm.$router.history.current.path
        expect(result).toEqual("/displayResults")
      })

      it("should set showErr to true if error is true", () => {
        const component = shallowMount(EnterNames, { store, localVue })

        expect(component.vm.$data.showErr).toEqual(false)

        component.vm.evaluateError(true)

        expect(component.vm.$data.showErr).toEqual(true)
      })
    })
  })

  describe("computed properties", () => {

    describe("playerList", () => {

      it("should return default playerList", () => {
        const component = shallowMount(EnterNames, { store, localVue })

        const expected = ["", ""]
        expect(component.vm.playerList).toEqual(expected)
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should call validateInputs when right arrow is clicked", () => {
        const spy = jest.spyOn(EnterNames.methods, "validateInputs")
        const component = shallowMount(EnterNames, { store, localVue })

        component.find("#right-arrow").trigger("click")

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
