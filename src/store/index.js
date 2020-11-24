import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamNum: 0,
    playerNum: 0,
  },

  mutations: {

    plusteamNum: (state) => state.teamNum++,
    minusteamNum: (state) => state.teamNum--,

    plusplayerNum: (state) => state.playerNum++,
    minusplayerNum: (state) => state.playerNum--,
  },

  actions: {},
  modules: {},
})
