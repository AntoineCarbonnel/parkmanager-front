<template>

</template>

<script>
export default {
  name: "parkings",
  async asyncData({$axios, store}) {
    const parkings = await $axios.$get('parkings/user/' + store.getters.getUserInfos.id)
  }
}
</script>

<style scoped>

</style>
