<template>
  <div id="homepage">
    <section id="find">
      <div class="container">
        <div>
          <Input name="Trouver votre parking" id="parking" v-model="parkingRequest"/>
          <div v-if="parkingRequest.length > 0" class="dropdown">
            <article class="parking" v-for="parking in filteredParkings" :key="parking.id">
              <div>
                {{ parking.name }}
              </div>
              <div>
                {{ parking.address }}
              </div>
            </article>
          </div>
        </div>
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
              <nuxt-link class="button" to="register">
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
  },
  computed: {
    filteredParkings: function () {
      return this.parkings.filter(parking => parking.name.includes(this.parkingRequest))
    }
  },
  async asyncData({$axios}) {
    const parkings = await $axios.$get('parking')

    return {parkings}
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

      > div {
        position: relative;
        margin: 250px 0;
        @include flex();
        width: 100%;

        .dropdown {
          left: 10%;
          top: 110%;
          width: 80%;
          border-radius: 5px;
          position: absolute;
          background-color: white;
          @include flex($align: flex-start, $direction: column);

          article {
            @include flex(flex-start);
            background-color: white;
            padding: 10px 15px;
            transition: .5s;
            width: 100%;

            &:hover {
              background-color: $blue;
              cursor: pointer;
              color: white;
            }
          }
        }
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
