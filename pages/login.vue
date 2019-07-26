<template>
  <SignIn></SignIn>
</template>

<script>
import SignIn from "~/components/auth/SignIn"

export default {
  middleware: "notAuthenticated",
  components: {
    SignIn
  }
}
</script>

