<template>
  <div class="wrapper">
    <div id="nav-background" :class="{'active': open}" />
    <div id="nav-container" :class="{'active': open}">
      <button
        aria-label="Open navigation menu"
        name="nav"
        :class="{'active': open}"
        @click="open = !open"
      >
        <div class="line" :style="{background: page.colour}" />
        <div class="line" :style="{background: page.colour}" />
        <div class="line" :style="{background: page.colour}" />
      </button>

      <nav :class="{'active': open}">
        <ul class="nav-list">
          <li @click="open = false">
            <nuxt-link to="/" exact>
              Home
            </nuxt-link>
          </li>

          <li @click="open = false">
            <nuxt-link to="/work">
              Work
            </nuxt-link>
          </li>

          <li @click="open = false">
            <nuxt-link to="/contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  z-index: 20;
}

#nav-container,
#nav-background {
  width: 60px;
  height: 60px;
  position: fixed;
  transition: height 0.3s 0.3s, width 0.3s 0.6s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

#nav-container {
  background: white;
  border: 3px solid var(--dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: 16px;
  right: 16px;
}

#nav-background {
  background: var(--dark-grey);
  top: 20px;
  right: 20px;
}

#nav-container.active,
#nav-background.active {
  width: 200px;
  height: 300px;
  transition: width 0.3s 0.3s, height 0.3s 0.6s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

button {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  font: var(--main-font);
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s 0.9s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

button.active {
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

.line {
  width: 55%;
  height: 4px;
  margin: 4px auto;
}

nav {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

nav.active {
  visibility: visible;
  opacity: 1;
  transition: 0.2s 0.9s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

li {
  margin: 16px 0;
  text-align: center;
}

li:first-of-type a:hover {
  color: var(--dark-yellow);
}

li:nth-of-type(2) a:hover {
  color: var(--blue);
}

li:last-of-type a:hover {
  color: var(--red);
}

li:first-of-type a.nuxt-link-active {
  color: var(--dark-yellow);
}

li:nth-of-type(2) a.nuxt-link-active {
  color: var(--blue);
}

li:last-of-type a.nuxt-link-active {
  color: var(--red);
}
</style>
