<template>
  <footer>
    <div class="container">
      <img src="~/assets/img/logo.svg" alt="Logo black">
      <div class="socials">
        <span>
          Retrouvez nous ici:
        </span>
        <a href="https://twitter.com/VINCIAutoroutes">
          <img src="~/assets/img/rs/twitter.svg" alt="twitter">
        </a>
        <a href="https://facebook.com/VINCIAutoroutes">
          <img src="~/assets/img/rs/facebook.svg" alt="facebook">
        </a>
        <a href="https://www.instagram.com/vinci_autoroutes/">
          <img src="~/assets/img/rs/instagram.svg" alt="instagram">
        </a>
        <a href="https://www.youtube.com/channel/UCgQKvsnEvE3uCmK4lKYmORQ">
          <img src="~/assets/img/rs/youtube.svg" alt="youtube">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $blue;

  .container {
    @include flex(space-between);
    padding: 50px 0;

    .socials {
      @include flex();
      gap: 20px;

      span {
        color: white;
        font-size: 1.5rem;
        margin-right: 20px;
      }
    }
  }
}
</style>
