<template>
  <div
    :style="{ height: `${height}vh` }"
    class="container"
  >
    <div
      id="bar"
      :style="{ border: `8px solid ${pageColour}`, height: `${height}vh` }"
    >
      <div
        :style="{ transform: translate, height: `${height * 3}vh` }"
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
export default {
  props: {
    page: { required: true, type: String },
    pageColour: { required: true, type: String }
  },
  data () {
    return {
      height: 100
    }
  },
  computed: {
    translate () {
      switch (this.page) {
        case '/work':
          return `translateY(-${this.height}vh)`
        case '/contact':
          return `translateY(-${this.height * 2}vh)`
        default:
          return 'translateY(0)'
      }
    }
  }
}
</script>

<style scoped>
.container {
  overflow: hidden;
  position: absolute;
  top: 49vh;
  left: 0;
}

#bar {
  width: 50px;
  overflow: hidden;
  transition: border 0.3s;
}

.inner {
  width: 60px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  transition: 1.5s;
}

.line {
  height: 16px;
  width: 100%;
  margin-top: 16px;
  transform: translate(-10px, -10px) rotate(-30deg);
  transition: background-color 0.3s;
}
</style>
