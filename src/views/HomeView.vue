<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div 
    class="counter"
    :style="{
      color:$store.state.color
    }"
    >
      {{ $store.state.counter }}
      
      <!-- {{counter}} -->
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
       <sup>2</sup> ==
       {{$store.getters.counterSquared}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increment')">+</button>
      <button @click="$store.dispatch('decrement')">-</button>
        <!-- <button @click="$store.commit('increment')">+</button>
             <button @click="$store.commit('decrement')">+</button> -->

      <!-- <button @click="increment">+</button> -->
      <!-- <button @click="decrement">-</button> -->
    </div>
    <!-- <input type="text" v-model="$store.state.color" placeholder="Enter one color" /> -->
    <input type="text" placeholder="Enter one color" v-model="color">
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed:{
   color:{
     get(){
     return this.$store.state.color
     },
     set(value){
       return this.$store.commit("setColor",value)
     }
   }
  },
  components: {},
  // data(){
  //   return{
  //     counter:0
  //   }
  // },
  // methods:{
  //   increment(){
  //     this.counter++
  //   },
  //   decrement(){
  //     this.counter--
  //   }
  // }

}
</script>
<style>
    
    div{
      margin-bottom: 10px;
    }
    .counter{
      font-size: 48px;

    }
    .buttons button{
      width: 100px;
      margin: 0 10px;
      font-size: 48px;
    }

</style>