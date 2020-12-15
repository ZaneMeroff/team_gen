import { createLocalVue, shallowMount } from '@vue/test-utils'
import store from "@/store/index"
import Vuex from "vuex"
import VueRouter from "vue-router"
import DisplayResults from "@/views/DisplayResults"

// --------- Vuex & Router setup ------------

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

// --------------- mocks --------------------

jest.spyOn(global.Math, "random").mockReturnValue(.5)

// ------------------------------------------

describe("DisplayResults", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(DisplayResults, { store, localVue })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("data", () => {

    describe("shuffledPlayerList", () => {

      it("should return a default value", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(component.vm.$data.shuffledPlayerList).toEqual(["",""])
      })
    })

    describe("emptyTeams", () => {

      it("should return a default value", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        const expected = [
          {id: 1, members: [] },
          {id: 2, members: [] },
        ]
        expect(component.vm.$data.emptyTeams).toEqual(expected)
      })
    })

    describe("playersPerTeam", () => {

      it("should return a default value", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(component.vm.$data.playersPerTeam).toEqual(1)
      })
    })

    describe("stepCounter", () => {

      it("should return a default value", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(component.vm.$data.stepCounter).toEqual(3)
      })
    })

    describe("results", () => {

      it("should return a default value", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(component.vm.$data.results).toEqual([])
      })
    })
  })

  describe("methods", () => {

    describe("shuffle", () => {

      it("should shuffle array", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        component.vm.shuffle([ "A", "B", "C", "D" ])

        const expected = [ "A", "D", "B", "C" ]
        expect(component.vm.$data.shuffledPlayerList).toEqual(expected)
      })
    })

    describe("buildTeamObjs", () => {

      it("should build correct number of team objs", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        component.vm.buildTeamObjs(3)

        const expected = [
          { id: 1, members: [] },
          { id: 2, members: [] },
          { id: 3, members: [] },
        ]
        expect(component.vm.$data.emptyTeams).toEqual(expected)
      })

      describe("getPlayersPerTeam", () => {

        it("should correctly set playesrPerTeam", () => {
          const component = shallowMount(DisplayResults, { store, localVue })

          const names = [ "Bob", "Sue", "Abe", "Dee", "Ben", "Dot"]
          component.vm.getPlayersPerTeam(names, 2)
          expect(component.vm.$data.playersPerTeam).toEqual(3)
        })

        it("should correctly set playesrPerTeam", () => {
          const component = shallowMount(DisplayResults, { store, localVue })

          const names = [ "Bob", "Sue", "Abe", "Dee", "Ben"]
          component.vm.getPlayersPerTeam(names, 2)
          expect(component.vm.$data.playersPerTeam).toEqual(2)
        })

        it("should correctly set playesrPerTeam", () => {
          const component = shallowMount(DisplayResults, { store, localVue })

          const names = [ "Bob", "Sue", "Abe" ]
          component.vm.getPlayersPerTeam(names, 3)
          expect(component.vm.$data.playersPerTeam).toEqual(1)
        })
      })

      describe("clone", () => {

        it("should return clone of data", () => {
          const component = shallowMount(DisplayResults, { store, localVue })
          const names = [ "Bob", "Sue", "Abe" ]

          const result = component.vm.clone(names)

          expect(result).toEqual(names)
        })
      })

      describe("assignTeams", () => {

        it("should assign teams evenly", () => {
          const component = shallowMount(DisplayResults, { store, localVue })
          const names = [ "A", "B", "C", "D", "E", "F" ]
          const teams = [
            { id: 1, members: [] },
            { id: 2, members: [] },
            { id: 3, members: [] },
          ]

          component.vm.assignTeams(names, teams)

          const expected = [
            { id: 1, members: [ "F", "C" ] },
            { id: 2, members: [ "E", "B" ] },
            { id: 3, members: [ "D", "A" ] },
          ]
          expect(component.vm.$data.results).toEqual(expected)
        })
      })
    })
  })

  describe("computed properties", () => {

    describe("playerList", () => {

      it("should return default playerList", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        const expected = ["", ""]
        expect(component.vm.playerList).toEqual(expected)
      })
    })

    describe("teamNum", () => {

      it("should return default teamNum", () => {
        const component = shallowMount(DisplayResults, { store, localVue })

        const expected = 2
        expect(component.vm.teamNum).toEqual(expected)
      })
    })
  })

  describe("watch", () => {

    describe("stepCounter", () => {

      it("should call assignTeams when stepCounter is 3", async () => {
        const component = shallowMount(DisplayResults, { store, localVue })
        const spy = jest.spyOn(component.vm, "assignTeams")

        await expect(component.vm.$data.stepCounter).toEqual(3)
        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("lifecycle hooks", () => {

    describe("mounted", () => {

      it("should call shuffle", () => {
        const spy = jest.spyOn(DisplayResults.methods, "shuffle")
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it("should call buildTeamObjs", () => {
        const spy = jest.spyOn(DisplayResults.methods, "buildTeamObjs")
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(spy).toHaveBeenCalledTimes(1)
      })

      it("should call getPlayersPerTeam", () => {
        const spy = jest.spyOn(DisplayResults.methods, "getPlayersPerTeam")
        const component = shallowMount(DisplayResults, { store, localVue })

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
