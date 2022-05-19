<template>
  <div id="profile">
    <DashboardMenu/>
    <section id="user">
      <div class="container">
        <h1>
          Vos Informations utilisateur
        </h1>
        <form @submit.prevent="">
          <Input name="Firstname" id="firstname" v-model="user.firstname" :default-value="user.firstname"/>
          <Input name="Lastname" id="lastname" v-model="user.lastname" :default-value="user.lastname"/>
          <Input name="Email" id="email" v-model="user.email" :default-value="user.email" type="email"/>
          <div class="buttons">
            <button @click="updateUser" class="button">
              Metter à jour vos informations
            </button>
            <button @click="deleteUser" class="button red">
              Supprimer votre compte
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  middleware: 'auth',
  methods: {
    updateUser() {
      this.$axios.$put('user/' + this.user.id, this.user).then(res => {
        console.log(res)
      })
    },
    deleteUser() {
      this.$axios.$delete('user/' + this.user.id).then(res => {
        this.$router.push('login')
      })
    }
  },
  async asyncData({$axios, store}) {
    const user = await $axios.$get('user/' + store.getters.getUserInfos.id)
    return {user}
  }
}
</script>

<style lang="scss" scoped>
#profile {
  .container {
    padding: 50px 0 150px;

    form {
      @include flex(flex-start, normal, column);
      gap: 15px;

      .buttons {
        @include flex(flex-end);
        gap: 20px;
        width: 80%;
      }
    }
  }
}
</style>
