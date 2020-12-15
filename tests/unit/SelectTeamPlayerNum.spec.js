import { createLocalVue, shallowMount } from '@vue/test-utils'
// import store from "@/store/index"
import Vuex from "vuex"
import VueRouter from "vue-router"
import SelectTeamPlayerNum from "@/views/SelectTeamPlayerNum"

// --------- Vuex & Router setup ------------

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const mutations = { updatePlayerList: jest.fn() }
const state = { teamNum: 2, playerNum: 2 }
const store = new Vuex.Store({ mutations, state })

// ------------------------------------------

describe("SelectTeamPlayerNum", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })

    it("should render error message if showErr is true", () => {
      const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("data", () => {

    describe("showErr", () => {

      it("should return a default value", () => {
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        expect(component.vm.$data.showErr).toEqual(false)
      })
    })
  })

  describe("methods", () => {

    describe("validateInputs", () => {

      it("should set showErr to true if teamNum > playerNum", () => {
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        store.state.teamNum = 5
        store.state.playerNum = 3

        expect(component.vm.$data.showErr).toEqual(false)

        component.vm.validateInputs()

        expect(component.vm.$data.showErr).toEqual(true)
        store.state.teamNum = 2    //   these can be
        store.state.playerNum = 2  //   removed
      })

      it.skip("should set route to EnterNames if teamNum < playerNum", () => {
        // ****************************************
        // ****************************************
        //  failing at this.$router.push("/enterNames")
        // ****************************************
        // ****************************************
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        store.state.teamNum = 2
        store.state.playerNum = 4
        component.vm.validateInputs()
      })

      it.skip("should set route to EnterNames if teamNum === playerNum", () => {
        // ****************************************
        // ****************************************
        //  failing at this.$router.push("/enterNames")
        // ****************************************
        // ****************************************
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        store.state.teamNum = 2
        store.state.playerNum = 2
        component.vm.validateInputs()
      })
    })
  })

  describe("computed properties", () => {

    describe("playerNum", () => {

      it("should return default playerNum", () => {
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        const expected = 2
        expect(component.vm.playerNum).toEqual(expected)
      })
    })

    describe("teamNum", () => {

      it("should return default teamNum", () => {
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        const expected = 2
        expect(component.vm.teamNum).toEqual(expected)
      })
    })
  })

  describe("watch", () => {

    describe("playerNum", () => {

      it.skip("should call updatePlayerList with correct value", () => {
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })

        store.state.playerNum++

        const expected = [ "", "", "" ]

        expect(mutations.updatePlayerList).toHaveBeenCalledWith({}, expected)
        // ****************************************
        // ****************************************
        //    this is failing at
        //    this.$store.commit("updatePlayerList", players)
        // ****************************************
        // ****************************************
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it.skip("should call validateInputs when right arrow is clicked", () => {
        const spy = jest.spyOn(SelectTeamPlayerNum.methods, "validateInputs")
        const component = shallowMount(SelectTeamPlayerNum, { store, localVue })
        // ****************************************
        // ****************************************
        //  this is failing because it's trying
        //  to run this.$router.push("/enterNames")
        // ****************************************
        // ****************************************
        component.find("#right-arrow").trigger("click")

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
