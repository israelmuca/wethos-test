<template>
  <main class="projects">
    <h1 class="projects-title">Projects</h1>

    <section class="projects columns is-multiline">
      <section class="column is-6 project" v-for="(p,k) in projects" :key="k">
        <div class="box">
          <h2 class="project-name">{{ p.name }}</h2>
          <p class="project-organization">{{ p.organization.name }}</p>
          <p class="project-description" v-html="p.description">
            <!-- {{ p.description }} -->
          </p>

          <div class="columns is-mobile">
            <div class="column is-6">See more</div>
            <div
              class="column is-6"
            >{{ p.specialists[0].user.first_name }} {{ p.specialists[0].user.last_name }}</div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["projects"])
  }
}
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.projects {
  width: 94.5% !important;

  .box-title {
    @include box-title;
  }

  .card-header {
    display: flex;

    cursor: pointer;

    .card-header-icon {
      max-height: 18px;

      svg {
        margin-left: 20px;

        height: 18px;
        width: 18px;
      }
    }
  }
  .category {
    .category-title {
      @include category-title;
    }

    .category-item {
      @include category-item;

      padding-left: 5px;
      margin-bottom: 2px;

      &::before {
        display: inline-block;
        content: "-";
        padding-right: 3px;
      }
    }
  }
}
</style>