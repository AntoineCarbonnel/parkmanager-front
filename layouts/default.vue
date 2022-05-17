<template>
  <div id="layout">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss" scoped>
#layout {
  @include flex(space-between, normal, $direction: column);
  min-height: 100vh;

  > div {
    flex-grow: 4;
  }
}
</style>
