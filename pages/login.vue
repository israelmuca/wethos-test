<template>
  <SignIn></SignIn>
</template>

<script>
import SignIn from "~/components/auth/SignIn"

export default {
  layout: "login",

  middleware: "notAuthenticated",
  
  components: {
    SignIn
  }
}
</script>

