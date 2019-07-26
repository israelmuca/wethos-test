<template>

  <!-- Top Navbar -->
  <!-- Desktop: Shows all the navigation links -->
  <!-- Mobile: Only shows the logo in the middle -->
  <nav
    class="navbar is-transparent top-navbar has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item navbar-logo" to="/">
        <img src="~static/logo/wethos.png" alt="Wethos Logo" />
      </nuxt-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" exact to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
        <nuxt-link class="navbar-item" to="/specialists">Specialists</nuxt-link>
        <nuxt-link class="navbar-item" to="/network">Network</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link user-icon-dropdown is-arrowless">
            <img src="~static/svgs/user-circle.svg" alt="User Icon" class="user-icon" />
          </div>
          <div class="navbar-dropdown is-right is-boxed">
            <p class="navbar-item email">{{ email }}</p>
            <hr class="navbar-divider" />
            <a href @click="logout()" class="navbar-item">Logout</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navbar -->
    <!-- Desktop: Hidden -->
    <!-- Mobile: Shows the hamburguer menu -->
    <nav
      class="navbar is-transparent is-fixed-bottom bottom-navbar has-shadow is-hidden-desktop"
      role="navigation"
      aria-label="mobile navigation"
    >
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <a href @click="logout()" class="navbar-item">Logout</a>
          <hr />
          <nuxt-link class="navbar-item" exact to="/" @click.native="showNav = !showNav">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects" @click.native="showNav = !showNav">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/specialists" @click.native="showNav = !showNav">Specialists</nuxt-link>
          <nuxt-link class="navbar-item" to="/network" @click.native="showNav = !showNav">Network</nuxt-link>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login")
      })
    }
  },

  computed: {
    email() {
      return this.$store.state.user.email
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.top-navbar {
  background-color: transparent;

  // Center the logo on mobile
  @media (max-width: $breakpoint-md) {
    .navbar-brand {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .navbar-brand {
    .navbar-logo {
      padding-left: 1em;
    }
  }
  .navbar-menu {
    margin-left: 2em;
  }
  .navbar-end {
    .user-icon-dropdown {
      padding-right: 1.5em;
    }
  }
}

.bottom-navbar {
  background-color: transparent;

  .navbar-menu {
    margin-left: 0;

    hr {
      margin-top: 2px;
      margin-bottom: 2px;
    }
  }
}
</style>
