import { shallowMount } from '@vue/test-utils'

import TeamCard from "@/components/TeamCard"

describe("TeamCard", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(TeamCard)

      expect(component.element).toMatchSnapshot()
    })

    it("should set members prop", () => {
      const propsData = { members: [ "Bob", "Sue", "Abe" ] }
      const component = shallowMount(TeamCard, { propsData })

      expect(component.element).toMatchSnapshot()
    })

    it("should set teamId prop", () => {
      const propsData = { teamId: 5 }
      const component = shallowMount(TeamCard, { propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("members", () => {

      it("should have a default value", () => {
        const component = shallowMount(TeamCard)

        expect(component.vm.members).toEqual([])
      })

      it("should accept an array", () => {
        const propsData = { members: [ "Bob", "Sue", "Abe" ] }
        const component = shallowMount(TeamCard, { propsData })

        expect(component.vm.members).toEqual(propsData.members)
      })
    })

    describe("teamId", () => {

      it("should have a default value", () => {
        const component = shallowMount(TeamCard)

        expect(component.vm.teamId).toEqual(0)
      })

      it("should accept a number", () => {
        const propsData = { teamId: 5 }
        const component = shallowMount(TeamCard, { propsData })

        expect(component.vm.teamId).toEqual(propsData.teamId)
      })
    })
  })
})
