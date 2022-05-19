<template>
  <div id="parking">
    <DashboardMenu/>
    <div class="container">
      <form @submit.prevent="save">
        <h1>
          Enregistrer un parking
        </h1>
        <Input name="Nom du parking" id="name" v-model="form.name"/>
        <Input name="Localisation du parking" id="password" v-model="form.address"/>
        <div class="buttons">
          <button class="button">
            Enregister
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: {
        name: "",
        address: "",
      }
    }
  },
  methods: {
    save() {
      const form = this.form
      form.user_id = this.user_id
      this.$axios.$post('parking', form)
        .then(res => {
          if (res.name) {
            this.$router.push('/dashboard/parkings')
          }
        })
    }
  },
  computed: {
    user_id: function () {
      return this.$store.getters.getUserInfos.id
    }
  }
}
</script>

<style scoped>

</style>
