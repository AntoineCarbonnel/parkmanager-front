<template>
  <header>
    <div class="container">
      <a href="/">
        <img src="~/assets/img/logo.svg" id="logo" alt="Logo vinci">
      </a>
      <div class="menu">
        <nuxt-link class="button" to="login">
          Se connecter
        </nuxt-link>
        <nuxt-link class="button" to="login">
          S'inscrire
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
header {
  background-color: $blue;
  padding: 40px 0 40px;
  position: sticky;
  z-index: 5;
  top: 0;

  .container {
    @include flex(space-between);

    .menu {
      color: white;
      > a {
        margin: 0 10px;
      }
    }
  }
}
</style>
