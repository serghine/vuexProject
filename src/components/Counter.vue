<template>

     <div  class="counter" :style="{ color:$store.state.color}">
      {{ $store.state.counter }}
    </div>
</template>