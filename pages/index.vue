<template>
  <div class="index-container">
    <BasicInfo></BasicInfo>
    <div class="columns is-mobile">
      <Languages></Languages>
      <Links></Links>
    </div>
    <Causes></Causes>
  </div>
</template>

<script>
import BasicInfo from "~/components/index/BasicInfo"
import Languages from "~/components/index/Languages"
import Links from "~/components/index/Links"
import Causes from "~/components/index/Causes"

export default {
  middleware: "authenticated",

  components: {
    BasicInfo,
    Languages,
    Links,
    Causes
  },

  mounted() {
    this.$store.dispatch("getUser").then(res => {
      console.info("User loaded successfully")
    })

    this.$store.dispatch("getCurrentSpecialist").then(res => {
      console.info("Current Specialist loaded successfully")
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.index-container {
  @include main-width("small");
}
</style>
