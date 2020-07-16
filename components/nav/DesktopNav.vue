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
  top: 16px;
  left: 32px;
}

.nav-list {
  display: flex;
}

li a {
  margin: 0 10px;
  opacity: 0.7;
}

li a:hover {
  opacity: 1;
}

li a.nuxt-link-active {
  opacity: 1;
}

</style>
