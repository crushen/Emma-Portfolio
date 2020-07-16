<template>
  <div>
    <mobile-nav id="mobile-nav" />
    <desktop-nav id="desktop-nav" />
    <page />
    <nuxt />
  </div>
</template>

<script>
import MobileNav from '@/components/nav/MobileNav'
import DesktopNav from '@/components/nav/DesktopNav'
import page from '@/components/Page'

export default {
  components: {
    MobileNav,
    DesktopNav,
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

p, a {
  font-size: 18px;
}

#mobile-nav {
  display: block;
}

#desktop-nav {
  display: none;
}

.nav-list li a {
  text-decoration: none;
  color: var(--dark-grey);
  font-size: 18px;
  font-weight: 700;
  transition: 0.2s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
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
  margin-left: 35px;
}

.main-section {
  width: 90%;
  margin-top: 80px;
}

.main-section:last-of-type {
  margin: 80px 0 140px 0;
}

.main-section .inner {
  width: 90%;
  margin: auto;
}

.main-section .inner p:not(:first-of-type) {
  margin-top: 16px;
}

@media screen and (min-width: 670px) {
  .sub-title {
    font-size: 32px;
    margin-top: 10px;
  }

  .main-section {
    width: 87%;
    margin-top: 100px;
  }

  .main-section:last-of-type {
    margin: 100px 0 180px 0;
  }

  .main-section .inner {
    width: 82%;
    max-width: 520px;
  }
}

@media screen and (min-width: 1100px) {
  #mobile-nav {
    display: none;
  }

  #desktop-nav {
    display: block;
  }
}
</style>
