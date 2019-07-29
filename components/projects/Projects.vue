<template>
  <main class="projects">
    <h1 class="projects-page-title">Projects</h1>

    <section class="projects columns is-multiline">
      <section class="column is-6 project" v-for="(p,k) in projects" :key="k">
        <div class="box">
          <h2 class="project-name">{{ p.name }}</h2>
          <p class="project-organization">{{ p.organization.name }}</p>
          <p class="project-description" v-html="p.description"></p>
          <p class="project-statement-purpose" v-html="p.statement_of_purpose"></p>

          <div class="columns is-mobile options-columns">
            <div class="column is-4 see-more">See more</div>
            <div
              class="column is-8 has-text-right"
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
  .projects-page-title {
    @include projects-page-title;

    margin-top: 5vw;
    margin-bottom: 2.5vw;
  }

  .project-name {
    @include project-name;
  }

  .project-organization {
    @include project-organization;
    margin-bottom: 10px;
  }

  .project-description {
    @include project-description;
  }

  .project-statement-purpose {
    @include project-description;
    font-style: italic;

    margin-top: 3px;
    margin-bottom: 13px;
  }

  .see-more {
    @include see-more;

    cursor: pointer;
  }
}
</style>