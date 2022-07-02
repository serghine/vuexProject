<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
      
      <!-- {{counter}} -->
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increment')">+</button>
      <button @click="$store.dispatch('decrement')">-</button>

        <!-- <button @click="$store.commit('increment')">+</button>
             <button @click="$store.commit('decrement')">+</button> -->

      <!-- <button @click="increment">+</button> -->
      <!-- <button @click="decrement">-</button> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
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