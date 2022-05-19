<template>
  <div id="parkings">

  </div>
</template>

<script>
export default {
  name: "parkings",
  async asyncData({$axios, store}) {
    const parkings = await $axios.$get('/parking/user/' + store.getters.getUserInfos.id)
    return {parkings}
  }
}
</script>

<style lang="scss" scoped>

</style>
