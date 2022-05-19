<template>
  <div id="register">
    <div class="container">
      <form @submit.prevent="register">
        <h1>
          Inscription
        </h1>
        <Input name="Firstname" id="firstname" v-model="form.firstname" :default-value="form.firstname"/>
        <Input name="Lastname" id="lastname" v-model="form.lastname" :default-value="form.lastname"/>
        <Input name="Email" id="email" v-model="form.email" :default-value="form.email" type="email"/>
        <Input name="Mot de passe" id="password" v-model="form.password" :default-value="form.password"
               type="password"/>
        <div class="buttons">
          <button class="button">
            Inscription
          </button>
        </div>
        <p>
          Vous avez déjà un compte ?
          <nuxt-link to="register">Connectez-vous</nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    register() {
      this.$axios.$post('user/register', this.form)
        .then(res => {
        this.$axios.$post('user/login', {email: res.email, password: res.password})
          .then(result => {
            console.log(result)
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#register {
  .container {
    @include flex();
    margin: 150px auto;

    form {
      @include flex($direction: column);
      background-color: white;
      max-width: 500px;
      width: 100%;
      padding: 50px 60px;
      gap: 20px;

      .buttons {
        @include flex(flex-end);
        width: 80%;
      }

      p {
        a {
          color: $blue;
        }
      }
    }
  }
}
</style>
