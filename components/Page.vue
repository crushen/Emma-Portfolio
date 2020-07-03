<template>
  <section class="pages">
    <div class="page">
      <!-- <transition name="slide" mode="out-in"> -->
      <home
        v-if="page === '/'"
        key="home"
        :page-colour="pageColour"
      />

      <work
        v-if="page === '/work'"
        key="work"
        :page-colour="pageColour"
      />

      <contact
        v-if="page === '/contact'"
        key="contact"
        :page-colour="pageColour"
      />
      <!-- </transition> -->
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import home from '@/components/pages/Home'
import work from '@/components/pages/Work'
import contact from '@/components/pages/Contact'

export default {
  components: {
    home,
    work,
    contact
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['page']),
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
