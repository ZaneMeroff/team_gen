import ArrowBtn from "@/components/ArrowBtn"
import { shallowMount } from "@vue/test-utils"

describe("ArrowBtn", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(ArrowBtn)

      expect(component.element).toMatchSnapshot()
    })

    it("should render with nav-arrow-btn class", () => {
      const propsData = { arrowDirection: "left" }
      const component = shallowMount(ArrowBtn, { propsData })

      expect(component.element).toMatchSnapshot()
    })
  })

  describe("props", () => {

    describe("arrowDirection", () => {

      it("should have a default value", () => {
        const component = shallowMount(ArrowBtn)

        expect(component.vm.arrowDirection).toEqual("up")
      })

      it("should accept a string", () => {
        const propsData = { arrowDirection: "down" }
        const component = shallowMount(ArrowBtn, { propsData })

        expect(component.vm.arrowDirection).toEqual(propsData.arrowDirection)
      })
    })
  })

  describe("data", () => {

    describe("arrowDisplay", () => {

      it("should return a default value", () => {
        const component = shallowMount(ArrowBtn)

        expect(component.vm.$data.arrowDisplay).toEqual("&#8593")
      })
    })

    describe("arrowKey", () => {

      it("should have a default value", () => {
        const component = shallowMount(ArrowBtn)

        const expected = {
          down:  "&#8595",
          left:  "&#x2190",
          right: "&#x2192",
          up:    "&#8593",
        }
        expect(component.vm.$data.arrowKey).toEqual(expected)
      })
    })
  })

  describe("methods", () => {

    describe("setArrowDisplay", () => {

      it("should set arrowDisplay if arrowDirection is 'up'", () => {
        const component = shallowMount(ArrowBtn)

        component.vm.setArrowDisplay("up")

        expect(component.vm.$data.arrowDisplay).toEqual("&#8593")
      })

      it("should set arrowDisplay if arrowDirection is 'down'", () => {
        const component = shallowMount(ArrowBtn)

        component.vm.setArrowDisplay("down")

        expect(component.vm.$data.arrowDisplay).toEqual("&#8595")
      })

      it("should set arrowDisplay if arrowDirection is 'left'", () => {
        const component = shallowMount(ArrowBtn)

        component.vm.setArrowDisplay("left")

        expect(component.vm.$data.arrowDisplay).toEqual("&#x2190")
      })

      it("should set arrowDisplay if arrowDirection is 'right'", () => {
        const component = shallowMount(ArrowBtn)

        component.vm.setArrowDisplay("right")

        expect(component.vm.$data.arrowDisplay).toEqual("&#x2192")
      })
    })

    describe("emitArrowBtnClick", () => {

      it("should emit arrowClick", () => {
        const component = shallowMount(ArrowBtn)

        component.vm.emitArrowBtnClick()

        const expected = { "arrowClick": [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })
  })

  describe("lifecyle hooks", () => {

    describe("mounted", () => {

      it("should call setArrowDisplay with a direction", () => {
        const spy = jest.spyOn(ArrowBtn.methods, "setArrowDisplay")
        const propsData = { arrowDirection: "down" }
        const component = shallowMount(ArrowBtn, { propsData })

        expect(spy).toHaveBeenCalledWith("down")
      })
    })
  })

  describe("user interactions", () => {

    describe("events", () => {

      it("should emit arrowClick when button is clicked", () => {
        const component = shallowMount(ArrowBtn)

        component.find(".arrow-btn").trigger("click")

        const expected = { "arrowClick": [[]] }
        expect(component.emitted()).toEqual(expected)
      })
    })
  })
})
