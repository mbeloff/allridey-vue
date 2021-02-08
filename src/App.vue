<template>
  <div id="app">
    <script
      type="application/javascript"
      src="https://kit.fontawesome.com/dcf276a164.js"
      crossorigin="anonymous"
      sameSite="none"
    ></script>
    <Navbar></Navbar>
    <!-- <div class="position-absolute numero mr-2 mt-2">
      <div class="d-flex flex-column float-right ml-auto">
        <p class="blue-text font-weight-bold h5 mb-1">
          <span class="fas fa-phone-rotary"></span> 1800 24 68 69
          <span
            class="ml-4 blue-text font-weight-bold h4 small text-right mb-0"
          >
            NZ: 0800 24 68 70
          </span>
        </p>
      </div>
    </div> -->
    <router-view v-bind:global="$store.state.global" />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>
<style lang="scss">
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.numero {
  top: 0;
  right: 0;
}
</style>
