<template>
  <section class="pages">
    <header-background :page="page" />
    <sidebar :page="page" />
    <scroll-button />
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
.page {
  min-height: 100vh;
  transition: 0.6s;
  position: relative;
  z-index: 10;
}
</style>
