<template>
  <div id="homepage">
    <section id="find">
      <div class="container">
        <form>
          <Input name="Trouver votre parking" id="parking" v-model="parkingRequest" />
            <div class="dropdown">

            </div>
        </form>
      </div>
    </section>
    <section id="information">
      <div class="container">
        <figure>
          <figcaption>
            <h2>
              Trouver des places disponibles simplement et facilement !
            </h2>
            <p class="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.

              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
              pain and trouble that are bound to ensue;
            </p>
            <div class="buttons">
              <nuxt-link class="button" to="login">
                Se connecter
              </nuxt-link>
              <nuxt-link class="button" to="login">
                S'inscrire
              </nuxt-link>
            </div>
          </figcaption>
          <img width="500" src="~assets/img/utilisateur.jpg" alt="parking">
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      parkingRequest: ''
    }
  }
}
</script>

<style scoped lang="scss">
#homepage {
  section#find {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~assets/img/homepage-bg.jpg") no-repeat center;
    background-size: cover;

    .container {
      @include flex();

      form {
        @include flex();
        margin: 300px 0;
        width: 100%;
      }
    }
  }

  section#information {
    .container {
      padding: 100px 0;

      figure {
        @include flex(space-between, normal);
        gap: 50px;

        figcaption {
          @include flex($align: space-between, $direction: column);

          .buttons {
            @include flex(flex-start);
            gap: 15px;
          }
        }
      }
    }
  }
}
</style>
