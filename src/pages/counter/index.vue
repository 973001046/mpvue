<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    {{age}}
    <p>
      <!-- <button @click="increment">+</button> -->
      <!-- <button @click="decrement">-</button> -->
    </p>
  </div>
</template>

<script>
// Use Vuex
import {mapState} from 'Vuex'

export default {
  computed: {
    ...mapState(['name', 'age'])
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
