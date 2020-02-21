<template>
  <div class="container p-0">
    <div class="col-12 text-left">
      <h2>
        All Ridey Car and Camper Hire
        <br />Rates and Fees Information for Agents
      </h2>
      <h5 class="-text mb-5">
        Hires charged by 24 hour periods. Not calendar days
      </h5>
      <!-- <hr> -->
    </div>
    <b-card no-body class="z-depth-0 mb-4">
      <b-tabs pills fill card>
        <b-tab
          class="p-2 grey lighten-5"
          v-for="(type, i) in regionData.type"
          :key="i"
          :title="type.name"
        >
          <p class="text-center text-muted">{{ type.note }}</p>
          <!-- <h2 class="my-3 text-left font-weight-bold">You Take</h2> -->
          <div class="col-12 text-left p-1 pl-3 z-depth-0 grey lighten-5">
            <h6 class="text-left my-2 font-weight-bold">Daily Rate</h6>
            <div
              class="row white z-depth-0 props px-1 border-bottom d-flex flex-row no-gutters"
              style="line-height: 1.4"
            >
              <div class="col-6">Daily Rate</div>
              <div class="col-6">Set by agent</div>
            </div>
          </div>
          <!-- <h2 class="my-3 text-left font-weight-bold mt-4">We Take</h2> -->
          <div
            class="col-12 text-left my-2 p-1 pl-3 grey lighten-5"
            v-for="(section, i) in type.section"
            :key="i"
          >
            <h6 class="text-left my-2 font-weight-bold">
              {{ section.heading }}
            </h6>
            <div
              class="col-12 p-0 props white border-bottom"
              v-for="(prop, i) in section.data"
              :key="i"
            >
              <div class="row no-gutters px-1" style="line-height: 1.4">
                <div class="col-6">
                  <div
                    v-if="prop[2]"
                    class="numberCircle"
                    style="transform: scale(0.75); left: -1.75rem; top: -.25rem"
                  >
                    {{ i + 1 }}
                  </div>
                  {{ prop[0] }}
                </div>
                <div class="col-6">{{ prop[1] }}</div>
              </div>
            </div>
          </div>
          <div class="container white card z-depth-0">
            <h2 class="my-3 text-left font-weight-bold">Vehicles</h2>
            <div class="display">
              <a
                :href="model.link"
                class="display-item"
                v-for="(model, i) in type.models"
                :key="i"
              >
                <div class="numberCircle">{{ model.number }}</div>
                <img class="img-fluid" :src="model.img" alt />
                <span class="text-left small">{{ model.name }}</span>
              </a>
            </div>
          </div>

          <div
            class="container-fluid grey lighten-4 text-left card z-depth-0 mt-2"
          >
            <div class="row">
              <div
                class="col-12 col-md-6 mr-auto text-muted d-flex flex-center flex-column py-4"
              >
                <h3>Terms and Conditions</h3>
                <h6>
                  Please note that the full terms of our Vehicle Rental
                  Agreement will apply to the hire of any of our vehicles, and
                  will prevail in the case of any inconsistency with any
                  summaries provided.
                </h6>
                <div class="col-12">
                  <a class="grey-text" :href="regionData.policies">
                    <span
                      class="fas fa-file-pdf mr-2"
                      aria-hidden="true"
                    ></span>
                    Summary of Policies
                  </a>
                  <br />
                  <a class="grey-text" :href="regionData.vra">
                    <span
                      class="fas fa-file-pdf mr-2"
                      aria-hidden="true"
                    ></span>
                    Vehicle Rental Agreement
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-6 elegant-color rounded">
                <img :src="regionData.map" alt />
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
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

<style>
.display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0.1rem;
}
.display-item {
  /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.356); */
  overflow: hidden;
  transition: transform 200ms ease-out;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.props {
  font-size: 0.9rem;
}

.numberCircle {
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgb(46, 154, 255);
  border: 2px solid rgb(62, 131, 233);
  color: rgb(255, 255, 255);
  text-align: center;
  padding-top: 5px;
  font: 15px Arial, sans-serif;
}
</style>
