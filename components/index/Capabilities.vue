<template>
  <div class="columns">
    <section class="column is-12 capabilities">
      <div class="box" v-if="this.curEsp">
        <h2 class="box-title">Capabilities</h2>

        <bulma-accordion>
          <bulma-accordion-item
            class="category"
            v-for="(category, k) in Object.keys(organizedCapabilities)"
            :key="k"
          >
            <h4 slot="title" class="category-title">{{ category }}</h4>
            <p
              slot="content"
              class="category-item"
              v-for="(capability, ke) in organizedCapabilities[category]"
              :key="ke"
            >{{ capability }}</p>
          </bulma-accordion-item>
        </bulma-accordion>
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
      organizedCapabilities: {}
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
      this.organizedCapabilities = {}

      this.curEsp.capabilities.forEach(cap => {
        // Get current capability role name
        let roleName = cap.role.name

        // Confirm the role doesn't exist in the organizedCapabilities
        if (!this.organizedCapabilities[roleName]) {
          // Add the role to the object
          this.organizedCapabilities[roleName] = roleName

          // Set the role to an Array
          this.organizedCapabilities[roleName] = []
        }
        // Push the capability to it's array
        this.organizedCapabilities[roleName].push(cap.name)
      })
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.capabilities {
  width: 95.5% !important;

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
