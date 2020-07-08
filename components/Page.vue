<template>
  <section class="pages">
    <header-background :page-colour="pageColour" />
    <sidebar
      :page="page"
      :page-colour="pageColour"
      :page-height="pageHeight"
    />
    <div class="page">
      <transition name="slide" mode="out-in">
        <home
          v-if="page === '/'"
          key="home"
        />

        <work
          v-if="page === '/work'"
          key="work"
        />

        <contact
          v-if="page === '/contact'"
          key="contact"
        />
      </transition>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import headerBackground from '@/components/pages/HeaderBackground'
import sidebar from '@/components/pages/Sidebar'
import home from '@/components/pages/Home'
import work from '@/components/pages/Work'
import contact from '@/components/pages/Contact'

export default {
  components: {
    headerBackground,
    sidebar,
    home,
    work,
    contact
  },
  computed: {
    ...mapState(['page', 'pageHeight']),
    pageColour () {
      switch (this.page) {
        case '/work':
          return '#00A3FF'
        case '/contact':
          return '#FF3F15'
        default:
          return '#FFE600'
      }
    }
  }
}
</script>

<style scoped>
.page {
  transition: 0.6s;
  position: relative;
  z-index: 10;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}
</style>
