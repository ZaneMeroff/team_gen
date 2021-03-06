import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamNum: 2,
    playerNum: 2,
    playerList: ["", ""],
  },

  mutations: {

    plusteamsNum: (state) => state.teamNum++,
    minusteamsNum: (state) => state.teamNum !== 2 && state.teamNum--,

    plusplayersNum: (state) => state.playerNum++,
    minusplayersNum: (state) => state.playerNum !== 2 && state.playerNum--,

    updatePlayerList: (state, data) => state.playerList = data,
    updatePlayerName: (state, data) => state.playerList[data.id] = data.name,
  },

  actions: {},
  modules: {},
})
