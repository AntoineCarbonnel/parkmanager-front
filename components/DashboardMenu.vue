<template>
  <section id="dashboardMenu">
    <div class="container">
      <div class="menu">
        <nuxt-link to="/dashboard">
          Profile
        </nuxt-link>
        <nuxt-link to="/dashboard/parkings">
          Mes parkings
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DashboardMenu"
}
</script>

<style lang="scss" scoped>
#dashboardMenu {
  .menu {
    background: $lightBlueGradient;
    @include flex(flex-start);
    color: white;

    a {
      transition: .5s;
      padding: 10px 20px;
      border-right: 1px solid white;
      background: $lightBlueGradient;

      &:hover {
        background: $blue;
      }
    }
  }
}

</style>
