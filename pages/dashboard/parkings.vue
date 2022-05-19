<template>
  <div id="parkings">
    <div class="container">
      <DashboardMenu/>
      <section id="parkings">
        <div class="container">
          <div class="leading">
            <h1>
              Mes parkings
            </h1>
            <nuxt-link to="/dashboard/parking/" class="button">
              Enregistrer un parking
            </nuxt-link>
          </div>
          <div v-if="parkings.length > 0" class="parkings">
            <div v-for="parking in parkings" :key="parking.id" class="parking">
              <nuxt-link :to="'/dashboard/parking/' + parking.id">
                <article>
                  <h2>
                    {{ parking.name }}
                  </h2>
                  <p>
                    {{ parking.address }}
                  </p>
                </article>
              </nuxt-link>
            </div>
          </div>
          <div v-else class="nothing">
            No parking yet :(
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard-",
  async asyncData({$axios, store}) {
    const parkings = await $axios.$get('parking/user/' + store.getters.getUserInfos.id)

    return {parkings}
  }
}
</script>

<style scoped>

</style>
