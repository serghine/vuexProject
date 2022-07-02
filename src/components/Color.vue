<template>
     <!-- <input type="text" v-model="$store.state.color" placeholder="Enter one color" /> -->
    <input type="text" placeholder="Enter one color" v-model="color">
</template>

<script>
export default ({
   computed:{
   color:{
     get(){
     return this.$store.state.color
     },
     set(newValue){
       return this.$store.dispatch("setColor",newValue)
     }
   }
  }
})

</script>

<style>
    
</style>