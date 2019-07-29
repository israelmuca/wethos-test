<template>
  <main class="projects">
    <h1 class="projects-page-title" v-if="!showIndPro">Projects</h1>

    <!-- Show all projects in boxes -->
    <section class="projects columns is-multiline">
      <section class="column is-6 project" v-for="(p,k) in projects" :key="k" v-if="!showIndPro">
        <div class="box">
          <h2 class="project-name">{{ p.name }}</h2>
          <p class="project-organization">{{ p.organization.name }}</p>
          <p class="project-description" v-html="p.description"></p>
          <p class="project-statement-purpose" v-html="p.statement_of_purpose"></p>

          <div class="columns is-mobile options-columns">
            <div class="column is-4 see-more" @click="showIndProMet(p.id)">See more</div>
            <div
              class="column is-8 has-text-right user-name"
            >{{ p.specialists[0].user.first_name }} {{ p.specialists[0].user.last_name }}</div>
          </div>
        </div>
      </section>
    </section>

    <!-- Show an individual project in full screen -->
    <section class="columns">
      <div class="column is-12 full-screen-project">
        <div class="box" v-if="showIndPro">
          <div class="close-icon has-text-right" @click="hideIndProMet()">X</div>
          <h1 class="project-title">{{ indProj.name }}</h1>
          <p class="project-organization">{{ indProj.organization.name }}</p>
          <p class="project-description" v-html="indProj.description"></p>
          <p class="project-statement-purpose" v-html="indProj.statement_of_purpose"></p>
          <div class="columns is-mobile is-vcentered">
            <div class="column is-7">
              <p class="current-scope-name" v-html="indProj.currentscope.name"></p>
              <p
                class="curent-scope-completed"
              >Completed: {{ indProj.currentscope.summary.total_points_completed }} / {{ indProj.currentscope.summary.total_points }}</p>
              <p class="current-scope-description" v-html="indProj.currentscope.description"></p>
            </div>
            <div class="column is-5">
              <div class="specialists" v-for="(s,ke) in indProj.specialists" :key="ke">
                <p class="specialist-name">{{ s.user.first_name }} {{ s.user.last_name}}</p>
                <p class="specialist-role">{{ s.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      showIndPro: false,
      indProj: {}
    }
  },

  computed: {
    ...mapState(["projects"])
  },

  methods: {
    showIndProMet(id) {
      // Find the project that was selected
      this.indProj = this.projects.find(p => p.id == id)

      // Remove the individual projects and activate the individual one
      this.showIndPro = true
    },

    hideIndProMet() {
      // Erase the individual Project
      this.indProj = {}

      // Hide the individual project and show all
      this.showIndPro = false
    }
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

  .user-name {
    @include project-user;
  }

  /* Individual full screen project box */

  .full-screen-project {
    margin-top: 5vw;

    .close-icon {
      margin-top: -10px;
      padding-left: 79vw;
      width: 5vw;
      cursor: pointer;
    }

    .project-title {
      @include ind-project-name;
      margin-bottom: 7.5px;
    }

    .project-organization {
      @include ind-project-organization;
      margin-bottom: 20px;
    }

    .project-description {
      @include ind-project-description;
    }

    .project-statement-purpose {
      @include project-description;
      font-style: italic;

      margin-bottom: 20px;
    }

    .current-scope-name {
      @include project-description;
      font-weight: 800;
    }

    .curent-scope-completed {
      @include project-description;
      font-style: italic;
    }

    .current-scope-description {
      @include project-description;
    }

    .specialist-name {
      @include project-user;
      font-weight: 800;
    }

    .specialist-role {
      @include project-user;
    }
  }
}
</style>