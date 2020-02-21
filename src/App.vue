<template>
  <div id="app">
    <script
      type="application/javascript"
      src="https://kit.fontawesome.com/933093fbcd.js"
      crossorigin="anonymous"
      sameSite="none"
    ></script>
    <div class="position-absolute numero mr-2 mt-2">
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
    </div>
    <div class="container">
      <div id="nav">
        <router-link
          class="btn btn-lg btn-rounded"
          v-for="(region, i) in $store.state.global"
          :key="i"
          :to="{
            name: 'Country',
            params: {
              country: region.urlname,
              regionIndex: i,
              myData: $store.state.global[i]
            }
          }"
          >{{ region.name }}
        </router-link>
      </div>
    </div>
    <router-view v-bind:global="$store.state.global" />
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: relative;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
      background: #007bff;
    }
  }
}

.numero {
  top: 0;
  right: 0;
}
</style>
