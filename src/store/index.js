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

    plusteamNum: (state) => state.teamNum++,
    minusteamNum: (state) => state.teamNum !== 2 && state.teamNum--,

    plusplayerNum: (state) => state.playerNum++,
    minusplayerNum: (state) => state.playerNum !== 2 && state.playerNum--,

    updatePlayerList: (state, data) => state.playerList = data,
    updatePlayerName: (state, data) => state.playerList[data.id] = data.name,
  },

  actions: {},
  modules: {},
})
