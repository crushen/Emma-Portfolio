<template>
  <div
    :style="{ height: `${page.height}px` }"
    class="container"
  >
    <div
      id="bar"
      :style="{ borderRight: `8px solid ${page.colour}`, height: `${page.height}px` }"
    >
      <div
        :style="{ transform: translate, height: `${page.height * 3}px` }"
        class="inner"
      >
        <div
          v-for="i in 200"
          :key="i"
          :style="{ backgroundColor: page.colour }"
          class="line"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: { required: true, type: Object }
  },
  computed: {
    translate () {
      switch (this.page.name) {
        case '/work':
          return `translateY(-${this.page.height}px)`
        case '/contact':
          return `translateY(-${this.page.height * 2}px)`
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
  width: 35px;
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
  height: 6px;
  width: 100%;
  transform: translate(-10px, 0px) rotate(-30deg);
  transition: background-color 0.3s;
}
</style>
