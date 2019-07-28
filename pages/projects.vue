<template>
  <div class="projects-container">
    <Projects></Projects>
  </div>
</template>

<script>
import Projects from "~/components/projects/Projects"
export default {
  middleware: "authenticated",

  components: {
    Projects
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.projects-container {
  @include main-width("small");
}
</style>