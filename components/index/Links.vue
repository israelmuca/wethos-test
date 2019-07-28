<template>
  <section class="column is-6">
    <div class="box" v-if="this.curEsp">
      <h2 class="box-title">Links</h2>

      <div class="link" v-for="(link, k) in curEsp.links" :key="k">
        <a
          :href="link.url"
          target="_blank"
          class="link-name"
          v-tooltip.right="link.url"
        >{{ link.title }}</a>
      </div>
    </div>
  </section>
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

.column.is-6 {
  width: 47.2% !important;
}

.box-title {
  @include box-title;
}

.link {
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .link-name {
    @include link-name;

    padding-left: 5px;

    @media (max-width: $breakpoint-md) {
      &::before {
        display: inline-block;
        margin-left: -20px;
        content: " ";
        background-image: url("~static/svgs/ext-link.svg");
        background-size: 14px 14px;
        height: 14px;
        width: 14px;
      }
    }
  }
}
</style>

