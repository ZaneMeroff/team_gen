<template>
  <div class="display-results-container">

    <div class="nav-btn-container">
      <router-link class="router-link" to="/enterNames">
        <ArrowBtn :arrowDirection="'left'"/>
      </router-link>

      <ArrowBtn
        :arrowDirection="'right'"
        :disabled="true"
      />
    </div>

    <div class="team-cards-container">
      <TeamCard
        v-for="(card, index) in results"
        :key="index"
        :members="card.members"
        :teamId="card.id"
      />
    </div>

  </div>
</template>

<script>
  import ArrowBtn from "../components/ArrowBtn"
  import TeamCard from "../components/TeamCard"

  export default {
    name: "DisplayResults",
    components: {
      ArrowBtn,
      TeamCard,
    },
    data() {
      return {
        emptyTeams: [],
        playersPerTeam: 1,
        results: [],
        shuffledPlayerList: [],
        stepCounter: 0,
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
        this.emptyTeams = teams
        this.stepCounter++
      },

      getPlayersPerTeam(names, teamNum) {
        this.playersPerTeam = Math.floor(names.length / teamNum)
        this.stepCounter++
      },

      clone(data) {
        return JSON.parse(JSON.stringify(data))
      },

      assignTeams(names, teams) {
        teams.forEach(team => {
          for ( let i = 1; i <= this.playersPerTeam; i++ ) {
            team.members.push(names.pop())
          }
        })
        teams.forEach(team => names.length && team.members.push(names.pop()))
        this.results = teams
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
        this.stepCounter === 3 && this.assignTeams(this.shuffledPlayerList, this.emptyTeams)
      }
    },
    mounted() {
      this.shuffle(this.clone(this.playerList))
      this.buildTeamObjs(this.teamNum)
      this.getPlayersPerTeam(this.playerList, this.teamNum)
    },
  }
</script>

<style scoped>

  .display-results-container {
    height: auto;
  }

  .team-cards-container {
    height: auto;
    margin-top: 30px;
  }

</style>
