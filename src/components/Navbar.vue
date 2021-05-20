<template>
  <div>
    <b-navbar id="nav" toggleable="md" type="light" variant="light">
      <div class="container">
        <b-navbar-brand href="/"
          ><img
            src="@/assets/logo.png"
            alt=""
            class="img-fluid"
            style="height: 50px"
        /></b-navbar-brand>
        <b-navbar-nav class="ml-auto order-0 order-md-2">
          <b-nav-item class="font-weight-bold text-right ml-auto">
            <span class="blue-text">AU: 1800 24 68 69</span><br />
            <span class="blue-text small">NZ: 0800 24 68 70</span>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item
              class="text-right rounded"
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
            </b-nav-item> -->
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              class="text-right rounded m-0 mt-4 mt-md-0 btn-quote"
              :to="{ name: 'Quote' }"
              >Get A Quote</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['global']
}
</script>

<style lang="scss">
#nav {
  position: relative;
  // padding: 30px 0;
  a {
    font-weight: normal;
    color: #2c3e50;
    border-radius: 5px;

    &.router-link-exact-active {
      color: #ffffff;
      background: #007bff;
    }
  }

  .btn-quote {
    background: rgb(255, 192, 74);
    color: white !important;
  }
}
</style>
