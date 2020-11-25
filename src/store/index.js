import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    teamNum: 2,
    playerNum: 2,
  },

  mutations: {

    plusteamNum: (state) => state.teamNum++,
    minusteamNum: (state) => state.teamNum !== 2 && state.teamNum--,

    plusplayerNum: (state) => state.playerNum++,
    minusplayerNum: (state) => state.playerNum !== 2 && state.playerNum--,
  },

  actions: {},
  modules: {},
})
