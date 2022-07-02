import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    counter:0,
    color:"red"
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter;
    }
  },
  mutations: {
    increment(state,randomNumber){
      state.counter +=randomNumber
    },
    decrement(state,random){
      state.counter -= random
    },
    setColor(state, value){
      return state.color=value;
    }
  },
  actions: {
    decrement({commit}){
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then(response=>{
       commit('decrement',response.data);
      })
      console.log("methode dispach de action")
    },
    increment({commit}){
      axios("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
      .then(response=>{
        commit('increment',response.data);
      })
    }

  },
  modules: {
  }
})
