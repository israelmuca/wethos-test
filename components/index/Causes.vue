<template>
  <div class="columns">
    <section class="column is-12 causes">
      <div class="box" v-if="this.curEsp">
        <h2 class="box-title">Causes</h2>

        <div class="cause" v-for="(c, k) in curEsp.causes" :key="k">
          <p class="cause-name">{{ c.name }}</p>
          <blockquote class="cause-reason">{{ c.reason }}</blockquote>
          <br />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["curEsp"])
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.causes {
  width: 94.5% !important;

  .box-title {
    @include box-title;
  }

  .cause {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .cause-name {
      @include cause-name;

      padding-left: 5px;
    }

    .cause-reason {
      @include cause-reason;

      padding-left: 10px;
    }
  }
}
</style>
