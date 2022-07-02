<template>
        <div class="buttons">
      <button @click="$store.dispatch('increment')">+</button>
      <button @click="$store.dispatch('decrement')">-</button>
        <!-- <button @click="$store.commit('increment')">+</button>
             <button @click="$store.commit('decrement')">+</button> -->

      <!-- <button @click="increment">+</button> -->
      <!-- <button @click="decrement">-</button> -->
    </div>
</template>