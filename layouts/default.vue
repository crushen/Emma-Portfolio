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
  }
}
</script>

<style>
:root {
  --yellow: #FFE600;
  --dark-yellow: #F5DD00;
  --blue: #00A3FF;
  --red: #FF3F15;
  --dark-grey: #3F3F3F;

  --title-font: 'Bungee', serif;
  --main-font: 'Bitter', cursive;

  --header-height: 50vh;
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
  font-family: var(--main-font);
  color: var(--dark-grey);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5 {
  font-family: var(--title-font);
}

p {
  font-size: 18px;
}

.sub-title {
  font-size: 4.8vw;
}

.link {
  color: var(--dark-grey);
  font-weight: 700;
}

.page-header {
  padding: 16px;
  height: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-content {
  margin-left: 50px;
}

.main-section {
  width: 90%;
  margin-top: 80px;
}

.main-section .inner {
  width: 90%;
  margin: auto;
}

.main-section .inner p:not(:first-of-type) {
  margin-top: 16px;
}
</style>
