<template>
  <nav>
    <ul class="nav-list">
      <li>
        <nuxt-link to="/" exact>
          Home
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/work">
          Work
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  z-index: 20;
  top: 24px;
  left: 24px;
}

.nav-list {
  display: flex;
}

li a {
  margin: 0 12px;
  opacity: 0.6;
}

li a:hover {
  opacity: 1;
}

li a.nuxt-link-active {
  opacity: 1;
}

</style>
