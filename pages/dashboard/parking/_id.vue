<template>
  <div id="parking">
    <DashboardMenu/>
    <div class="container">
      <form @submit.prevent="update">
        <h1>
          Modifier un parking
        </h1>
        <Input name="Nom du parking" id="name" v-model="parking.name" :default-value="parking.name"/>
        <Input name="Localisation du parking" id="address" v-model="parking.address" :default-value="parking.address"/>
        <div class="buttons">
          <button class="button">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "parkingUpdate",
  methods: {
    update() {
      this.$axios.$put('parking/' + this.parking.id, this.parking)
    }
  },
  async asyncData({$axios, params}) {
    const parking = await $axios.$get("parking/" + params.id)

    return {parking}
  }
}
</script>

<style scoped>

</style>
