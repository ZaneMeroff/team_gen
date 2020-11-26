import SelectTeamPlayerNum from "../views/SelectTeamPlayerNum"
import EnterNames from "../views/EnterNames"
import DisplayResults from "../views/DisplayResults"
import PageNotFound from "../views/PageNotFound"

export const routes = [
  { path: "/",                name: "1", component: SelectTeamPlayerNum },
  { path: "/enterNames",      name: "2", component: EnterNames },
  { path: "/displayResults",  name: "3", component: DisplayResults },
  { path: "*",                name: "4", component: PageNotFound },
]
