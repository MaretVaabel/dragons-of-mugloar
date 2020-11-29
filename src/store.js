import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: {},
        messages: [],
        reputation: {},
        message: {}

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
               // console.log(response)
                state.reputation = {
                    people: response.data.people,
                    state: response.data.state,
                    underworld: response.data.underworld
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getMessages(state, gameId) {
            axios.get(`https://dragonsofmugloar.com/api/v2/${gameId}/messages`)
            .then((response) => {
                //console.log(response.data)
                
                state.messages = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        solveMessage(state, params) {
            axios.post(`https://dragonsofmugloar.com/api/v2/${params.gameId}/solve/${params.adId}`)
            .then((response) => {
                console.log(response.data)
                
                state.message = response.data
                if(state.userData && state.userData.lives > 0) {
                    state.userData.lives = response.data.lives
                    state.userData.gold = response.data.gold 
                    state.userData.turn = response.data.turn 
                    state.userData.score = response.data.score
                    if(state.userData.highScore < state.userData.score) {
                        state.userData.highScore = state.userData.score
                    }   
                }else {
                    router.push('/gameOver')
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
        },
        getMessages(context, gameId) {
            context.commit('getMessages', gameId)
        },
        solveMessage(context, params) {
            context.commit('solveMessage', params)
        }    

    }
})