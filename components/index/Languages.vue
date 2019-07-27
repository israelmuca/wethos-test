<template>
  <div class="section box column is-6" v-if="this.curEsp">
    <h2 class="box-title">Languages</h2>

    <div v-for="(lang, k) in this.spokenLangs" :key="k">{{ lang }}, Level: {{ curEsp.languages[k].level }}</div>
  </div>
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
        // Using the l.code as key, get the value
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

