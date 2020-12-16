import { createLocalVue, shallowMount } from "@vue/test-utils"
import PageNotFound from "@/views/PageNotFound"
import VueRouter from "vue-router"

// --------- router setup ------------

const localVue = createLocalVue()
localVue.use(VueRouter)

// -----------------------------------

describe("PageNotFound", () => {

  describe("snapshots", () => {

    it("should render with default html", () => {
      const component = shallowMount(PageNotFound, { localVue })

      expect(component.element).toMatchSnapshot()
    })
  })
})
