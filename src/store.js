import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: {},
        messages: [],
        reputation: {},
        message: {},
        items: {},
        item: {}
    },
    mutations: {
       async getUserData(state){ 
        const response = await axios.post(`https://dragonsofmugloar.com/api/v2/game/start`)
                state.userData = {
                    gameId: response.data.gameId,
                    lives: response.data.lives,
                    gold: response.data.gold,
                    level: response.data.level,
                    score: response.data.score,
                    highScore: response.data.highScore,
                    turn: response.data.turn
                }
        },
        getReputation(state, gameId) {
            axios.post(`https://dragonsofmugloar.com/api/v2/${gameId}/investigate/reputation`)
            .then((response) => {
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
                state.messages = response.data              
            })
            .catch((error) => {
                console.log(error)
            })
        },
        solveMessage(state, params) {
            axios.post(`https://dragonsofmugloar.com/api/v2/${params.gameId}/solve/${params.adId}`)
            .then((response) => {
                state.message = response.data
                if(state.userData && state.userData.lives > 0) {
                    state.userData.lives = response.data.lives
                    state.userData.gold = response.data.gold 
                    state.userData.turn = response.data.turn 
                    state.userData.score = response.data.score
                    if(state.userData.highScore < response.data.score) {
                        state.userData.highScore = response.data.score
                    }   
                }    
            })
            .catch((error) => {
                console.log(error)
            })   
        },
        getItems(state, gameId) {

            axios.get(`https://dragonsofmugloar.com/api/v2/${gameId}/shop`)
            .then((response) => {
                console.log(response)
                state.items = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        buyItem(state, params) {
            axios.post(`https://dragonsofmugloar.com/api/v2/${params.gameId}/shop/buy/${params.id}`)
            .then((response) => {
                //console.log(response.data)
                
                state.item = response.data
                if(state.userData && state.userData.lives > 0) {
                    state.userData.lives = response.data.lives
                    state.userData.gold = response.data.gold 
                    state.userData.turn = response.data.turn 
                    state.userData.level = response.data.level   
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
        },
        getItems(context, gameId) {
            context.commit('getItems', gameId)
        },
        buyItem(context, params) {
            context.commit('buyItem', params)
        }  
    }
})