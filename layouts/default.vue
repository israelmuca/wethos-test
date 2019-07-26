<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar"

export default {
  components: {
    Navbar
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
