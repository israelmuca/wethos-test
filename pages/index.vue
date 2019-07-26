<template>
  <p>I'm logged in!</p>
</template>

<script>
export default {
  middleware: "authenticated",

  mounted() {
    this.$store.dispatch("getUser").then(res => {
      console.log(res)
    })
  }
}
</script>
