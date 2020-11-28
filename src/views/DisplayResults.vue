<template>
  <div>

    <router-link class="router-link" to="/enterNames">
      <ArrowBtn :arrowDirection="'left'"/>
    </router-link>

    <ArrowBtn :arrowDirection="'right'"/>

    <p>{{ result }}</p>

  </div>
</template>

<script>
  // need spec with snapshot

  import ArrowBtn from "../components/ArrowBtn"

  export default {
    name: "DisplayResults",
    components: {
      ArrowBtn,
    },
    data() {
      return {
        shuffledPlayerList: [],
        teamObjs: [],
        playersPerTeam: 0,
        stepCounter: 0,
        result: null, //this is for testing
      }
    },
    methods: {

      shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
        this.shuffledPlayerList = array
        this.stepCounter++
      },

      buildTeamObjs(num) {
        let teams = []
        for ( let i = 1; i <= num; i++ ) {
          teams.push({ id: i, members: [] })
        }
        this.teamObjs = teams
        this.stepCounter++
      },

      getPlayersPerTeam(names, teamNum) {
        this.playersPerTeam = Math.floor(names.length / teamNum)
        this.stepCounter++
      },

      assignTeams(names, teams) {
        teams.forEach(team => {
          for ( let i = 1; i <= this.playersPerTeam; i++ ) {
            team.members.push(names.pop())
          }
        })
        teams.forEach(team => names.length && team.members.push(names.pop()))
        this.result = teams //this is for testing
      },
    },
    computed: {

      playerList() {
        return this.$store.state.playerList
      },
      teamNum() {
        return this.$store.state.teamNum
      },
    },
    watch: {
      stepCounter() {
        this.stepCounter === 3 && this.assignTeams(this.shuffledPlayerList, this.teamObjs)
      }
    },
    mounted() {
      this.shuffle(this.playerList)
      this.buildTeamObjs(this.teamNum)
      this.getPlayersPerTeam(this.playerList, this.teamNum)
    },
  }
</script>

<style scoped>

</style>
