<template>
  <main class="container">
    <section class="image-and-data columns is-vcentered is-mobile">
      <!-- Image -->
      <!-- Show placeholder image if no image or when loading -->
      <!-- <div class="image-column-loading is-3" v-if="imageIsLoading"></div> -->
      <div class="image-column-loaded" v-if="this.curEsp && !imageIsLoading">
        <img
          class="profile-image"
          :src="this.curEsp.profileImage"
          alt="Current Specialist's Profile Picture"
        />
      </div>

      <!-- Text on the right-->
      <!-- Add skeleton text for when it's loading -->
      <!-- <div class="column is-7" v-if="textIsLoading"></div> -->
      <div class="description-column-loaded column is-7" v-if="this.user && !textIsLoading">
        <p class="info-name">{{ this.user.firstName }} {{ this.user.lastName }}</p>
        <p class="info-title">{{ this.curEsp.title }}</p>
        <p
          class="info-location"
          v-if="this.curEsp && this.curEsp.city && this.curEsp.city.region && this.curEsp.city.region.country"
        >{{ this.curEsp.city.name }}, {{ this.curEsp.city.region.country.name }}</p>
        <p class="info-here-since">Here since {{ $dayjs(this.user.createdAt).format("MMM 'YY") }}</p>
      </div>
    </section>
    <section class="description columns">
      <div class="column is-12 info-description" v-html="this.curEsp.description"></div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      imageIsLoading: false,
      textIsLoading: false
    }
  },

  computed: {
    ...mapState(["user", "curEsp"])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.container {
  @include main-width("small");

  padding-top: 5vw;

  .image-column-loaded {
    margin-left: 1.25vw;

    .profile-image {
      max-width: 100px;
      clip-path: circle(50px at center);

      @media (min-width: $breakpoint-sm) {
        max-width: 150px;
        clip-path: circle(75px at center);
      }
      @media (min-width: $breakpoint-md) {
        max-width: 250px;
        clip-path: circle(125px at center);
      }
    }
  }

  .description-column-loaded {
    margin-left: 2.5vw;

    .info-name {
      @include info-name;
    }

    .info-title {
      @include info-title;
    }

    .info-location {
      @include info-location;
    }

    .info-here-since {
      @include info-here-since;
    }
  }

  .info-description {
    @include info-description;
  }
}
</style>
