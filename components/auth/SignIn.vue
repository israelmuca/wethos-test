<template>
  <section class="vertical-center">
    <div class="columns is-centered">
      <div class="column has-text-centered">
        <img class="logo" src="~static/logo/wethos.png" alt="Wethos Logo" />
        <div class="box">
          <div class="field">
            <div class="control">
              <input
                v-model="signInData.email"
                placeholder="Email"
                class="input"
                :class="{ 'is-danger': $v.signInData.email.$error }"
                type="email"
                name="email"
              />
            </div>
            <p v-if="$v.signInData.email.$error" class="help is-danger">This is not a valid email</p>
          </div>
          <div class="field">
            <div class="control">
              <input
                v-model="signInData.password"
                placeholder="Password"
                class="input"
                :class="{ 'is-danger': $v.signInData.password.$error }"
                type="password"
                name="password"
              />
            </div>
            <p v-if="$v.signInData.password.$error" class="help is-danger">This is a required field</p>
          </div>
          <div class="field">
            <p class="control">
              <button
                class="button is-success"
                :class="{'is-loading': isLoading}"
                @click.prevent="login"
              >Sign In</button>
            </p>
          </div>
          <p
            class="help is-danger"
            v-if="authError"
          >There is an error with the data provided, please verify it</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, email } from "vuelidate/lib/validators"

export default {
  mixins: [validationMixin],

  data() {
    return {
      signInData: {
        email: "",
        password: ""
      },
      isLoading: false,
      authError: null
    }
  },

  validations: {
    signInData: {
      email: { required, email },
      password: { required }
    }
  },

  methods: {
    login() {
      // Set the button to a load status
      this.isLoading = true

      // Dispatch from the store
      this.$store
        .dispatch("login", this.signInData)
        .then(res => {
          this.authError = null
          this.isLoading = false
          /* this.$router.push("/") */
        })
        .catch(err => {
          this.authError = true
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.vertical-center {
  height: 99vh;
  padding: 0 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  .columns {
    min-width: 300px;

    .logo {
      max-width: 100px;
      margin-bottom: 30px;
    }

    .box {
      width: 100%;
    }
  }
}
</style>
