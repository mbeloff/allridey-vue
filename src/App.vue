<template>
  <div id="app">
    <div id="nav">
      <router-link
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
      >{{ region.name }} </router-link>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
