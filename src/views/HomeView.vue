<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <Counter />
     <CounterDisquared/> 
     <Buttons/>
     <Color/>   
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue"
import CounterDisquared from "@/components/Counter-squared.vue"
import Buttons from "@/components/Buttons.vue"
import Color from "@/components/Color.vue"
export default {
  name: 'HomeView',
  computed:{
   color:{
     get(){
     return this.$store.state.color
     },
     set(newValue){
       return this.$store.dispatch("setColor",newValue)
     }
   }
  },
  components: {Counter,CounterDisquared,Buttons,Color},
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