<template>
  <div id="login">
    <div class="container">
      <form @submit.prevent="login">
        <h1>
          Connexion
        </h1>
        <Input name="Email" id="email" v-model="form.email" :default-value="form.email" type="email"/>
        <Input name="Mot de passe" id="password" v-model="form.password" :default-value="form.password"
               type="password"/>
        <div class="buttons">
          <button class="button">
            Connexion
          </button>
        </div>
        <p>
          Vous n'avez pas de compte ?
          <nuxt-link to="register">Inscrivez-vous</nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: 'antoinecarbonnel@yahoo.fr',
        password: 'aze'
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('logIn', this.form)
        .then(res => {
            res.data.admin ? this.$router.push('dashboard') : this.$router.push('parking-index')
          }
        )
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  .container {
    @include flex();
    margin: 150px auto;
  }
}
</style>
