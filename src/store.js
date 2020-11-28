import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: {},
        messages: {},
        reputation: {}

    },
    mutations: {
        getUserData(state){
            
            axios.post(`https://dragonsofmugloar.com/api/v2/game/start`)
            .then((response) => {
                state.userData = {
                    gameId: response.data.gameId,
                    lives: response.data.lives,
                    gold: response.data.gold,
                    level: response.data.level,
                    score: response.data.score,
                    highScore: response.data.highScore,
                    turn: response.data.turn
                }
            })
            .catch((error) => {
                console.log(error)
            })

        },
        getReputation(state, gameId) {
            axios.post(`https://dragonsofmugloar.com/api/v2/${gameId}/investigate/reputation`)
            .then((response) => {
                console.log(response)
                state.reputation = {
                    people: response.data.people,
                    state: response.data.state,
                    underworld: response.data.underworld
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    actions: {
        getUserData: context => {
            context.commit('getUserData')
        },
        getReputation(context, gameId) {  
            context.commit('getReputation', gameId)
        }    

    }
})