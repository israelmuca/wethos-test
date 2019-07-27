<template>
  <div>
    <BasicInfo></BasicInfo>
    <div class="columns is-mobile">
      <Languages></Languages>
      <Links></Links>
    </div>
  </div>
</template>

<script>
import BasicInfo from "~/components/index/BasicInfo"
import Languages from "~/components/index/Languages"
import Links from "~/components/index/Links"

export default {
  middleware: "authenticated",

  components: {
    BasicInfo,
    Languages,
    Links
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

.columns {
  @include main-width("small");
}
</style>
