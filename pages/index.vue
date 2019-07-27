<template>
  <BasicInfo></BasicInfo>
</template>

<script>
import BasicInfo from "~/components/index/BasicInfo"

export default {
  middleware: "authenticated",

  components: {
    BasicInfo
  }
}
</script>
