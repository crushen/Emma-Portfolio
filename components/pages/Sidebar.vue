<template>
  <div
    :style="{ height: `${pageHeight}px` }"
    class="container"
  >
    <div
      id="bar"
      :style="{ border: `8px solid ${pageColour}`, height: `${pageHeight}px` }"
    >
      <div
        :style="{ transform: translate, height: `${pageHeight * 3}px` }"
        class="inner"
      >
        <div
          v-for="i in 200"
          :key="i"
          :style="{ backgroundColor: pageColour }"
          class="line"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    page: { required: true, type: String },
    pageColour: { required: true, type: String }
  },
  computed: {
    ...mapState(['pageHeight']),
    translate () {
      switch (this.page) {
        case '/work':
          return `translateY(-${this.pageHeight}px)`
        case '/contact':
          return `translateY(-${this.pageHeight * 2}px)`
        default:
          return 'translateY(0)'
      }
    }
  },
  mounted () {
    this.$store.commit('updateHeight')
    window.addEventListener('resize', () => {
      this.$store.commit('updateHeight')
    })
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

#bar {
  width: 50px;
  overflow: hidden;
  transition: border 0.3s;
}

.inner {
  width: 60px;
  /* overflow: hidden; */
  display: flex;
  flex-wrap: wrap;
  transition: 1.5s;
}

.line {
  height: 12px;
  width: 100%;
  margin-top: 16px;
  transform: translate(-10px, -10px) rotate(-30deg);
  transition: background-color 0.3s;
}
</style>
