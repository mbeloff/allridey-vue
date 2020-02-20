<template>
  <div>
    <h1>{{ regionData.name }}</h1>
    <div class="container" v-for="(type, i) in regionData.type" :key="i">
      <h2 class="py-4">{{ type.name }}</h2>
      <div
        class="col-12 text-left"
        v-for="(section, i) in type.section"
        :key="i"
      >
        <h5 class="text-left blue-text my-2">{{ section.heading }}</h5>
        <div class="col-12" v-for="(prop, i) in section.data" :key="i">
          <div class="row" style="line-height: 1.2">
            <div class="col-6">{{ prop[0] }}</div>
            <div class="col-6">{{ prop[1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
  props: ['global'],
  computed: {
    regionData() {
      return this.global[
        this.$store.state.countries.indexOf(this.$attrs.country)
      ]
    }
  }
}
</script>

<style></style>
