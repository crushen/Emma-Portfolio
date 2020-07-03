<template>
  <div>
    <app-nav />
    <page />
    <nuxt />
  </div>
</template>

<script>
import appNav from '@/components/nav/Nav'
import page from '@/components/Page'

export default {
  components: {
    appNav,
    page
  },
  mounted () {
    // window.scrollTo(0, 0)
  }
}
</script>

<style>
:root {
  --orange: #FFA69E;
  --green: #B8F2E6;
  --blue: #9ed4db;
  --purple: #c4a5c9;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
