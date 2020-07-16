<template>
  <header :style="{ backgroundColor: page.colour }">
    <transition name="slide" mode="out-in">
      <div
        v-if="page.name === '/'"
        key="home"
        class="page-header"
      >
        <img
          class="home"
          src="@/assets/name.svg"
          alt="Text - Emma Kate Parkinson"
        >
        <h2 class="sub-title">
          Digital Designer and Creative
        </h2>
      </div>

      <div
        v-if="page.name === '/work'"
        key="work"
        class="page-header"
      >
        <img
          src="@/assets/recent-work.svg"
          alt="Text - Recent Work"
          class="work"
        >
      </div>

      <div
        v-if="page.name === '/contact'"
        key="contact"
        class="page-header"
      >
        <img
          src="@/assets/contact.svg"
          alt="Text - Contact"
          class="contact"
        >
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  props: {
    page: { required: true, type: Object }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: var(--header-height);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  transition: 0.3s;
}

img.home {
  width: 90vw;
  max-width: 600px;
  margin: 56px 0 16px;
}

img.work {
  width: 90vw;
  max-width: 600px;
  margin: 56px 0 16px;
}

img.contact {
  width: 60vw;
  max-width: 400px;
}

@media screen and (min-width: 1100px) {
  header {
    width: 45%;
    position: fixed;
  }
}
</style>
