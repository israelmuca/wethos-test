<template>
  <div class="columns">
    <section class="column is-12 causes">
      <div class="box" v-if="this.curEsp">
        <h2 class="box-title">Capabilities</h2>

        <bulma-accordion :icon="'plus-minus'">
          <bulma-accordion-item
            class="category"
            v-for="(category, k) in Object.keys(orgCap)"
            :key="k"
          >
            <h3 slot="title" class="category-title">{{ category }}</h3>
            <p
              slot="content"
              class="category-item"
              v-for="(capability, ke) in orgCap[category]"
              :key="ke"
            >{{ capability }}</p>
          </bulma-accordion-item>
        </bulma-accordion>

        <!-- <div class="category" v-for="(category, k) in Object.keys(orgCap)" :key="k">
          <h3 class="category-title">{{ category }}</h3>
          <p
            class="category-item"
            v-for="(capability, ke) in orgCap[category]"
            :key="ke"
          >{{ capability }}</p>
        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion"

export default {
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  },
  data() {
    return {
      orgCap: {}
    }
  },
  computed: {
    ...mapState(["loadingCurEsp", "curEsp"])
  },

  watch: {
    // Check the loading state from Vuex for the current specialist
    loadingCurEsp(newState, oldState) {
      // If it was loading and it is no longer loading, mapCapabilities
      if (oldState && !newState) {
        this.mapCapabilities()
      }
    }
  },

  methods: {
    // Organize the capabilities in a better format
    mapCapabilities() {
      // Start with a clean slate everytime this runs
      this.orgCap = {}

      this.curEsp.capabilities.forEach(cap => {
        // Get current capability role name
        let roleName = cap.role.name

        // Confirm the role doesn't exist in the organizedCapabilities
        if (!this.orgCap[roleName]) {
          // Add the role to the object
          this.orgCap[roleName] = roleName

          // Set the role to an Array
          this.orgCap[roleName] = []
        }
        // Push the capability to it's array
        this.orgCap[roleName].push(cap.name)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.box-title {
  @include box-title;
}

.category {
  .category-title {
    @include category-title;
  }

  .category-item {
    @include category-item;
  }
}
</style>
