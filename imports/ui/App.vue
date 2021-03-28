<template>
  <div>
    <router-link to="/students">Students Info </router-link> <br/>
    <router-link to="/books">Subject List With Students</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Books from './components/Books.vue'



export default {
  components: {
    Books
  },
}
</script>

<style>

</style>
