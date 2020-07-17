<template>
  <section class="pages">
    <header-background :page="page" />
    <sidebar :page="page" />
    <transition name="scroll">
      <scroll-button v-if="page.name !== '/contact'" />
    </transition>
    <div class="page">
      <transition name="slide" mode="out-in">
        <home
          v-if="page.name === '/'"
          key="home"
        />

        <work
          v-if="page.name === '/work'"
          key="work"
        />

        <contact
          v-if="page.name === '/contact'"
          key="contact"
        />
      </transition>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import headerBackground from '@/components/HeaderBackground'
import sidebar from '@/components/Sidebar'
import home from '@/components/pages/Home'
import work from '@/components/pages/Work'
import contact from '@/components/pages/Contact'
import scrollButton from '@/components/ScrollButton'

export default {
  components: {
    headerBackground,
    sidebar,
    home,
    work,
    contact,
    scrollButton
  },
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style scoped>
.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}

.scroll-enter-active {
  transition-delay: 1s;
}

.page {
  min-height: 100vh;
  transition: 0.6s;
  position: relative;
  z-index: 10;
}

@media screen and (min-width: 1100px) {
  .page {
    padding: 150px 0 100px 0;
  }
}
</style>
