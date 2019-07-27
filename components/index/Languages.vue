<template>
  <section class="column is-6">
    <div class="box" v-if="this.curEsp">
      <h2 class="box-title">Languages</h2>

      <div class="lang" v-for="(lang, k) in this.spokenLangs" :key="k">
        <p class="lang-name">{{ lang }}</p>
        <progress class="progress is-small is-success" :value="curEsp.languages[k].level" max="5"></progress>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"
import { languages } from "~/utils/ISO639-2.js" // US provided list of language codes, formatted

export default {
  computed: {
    ...mapState(["curEsp"]),

    spokenLangs() {
      // Create an array to save results
      let userLangs = []

      // Cycle through the user's languages
      this.curEsp.languages.forEach(l => {
        // Using the l.code as key, get the value in languages
        let lang = languages[l.code]

        // Some languages have two words (Spanish; Castilian), keep the 1st
        lang = lang.split(";")[0]

        // Push it into the array
        userLangs.push(lang)
      })

      // Return the array
      return userLangs
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.box-title {
  @include box-title;
}

.lang {
  margin-bottom: 10px;

  .lang-name {
    @include lang-name;

    padding-left: 5px;
  }
}
</style>

