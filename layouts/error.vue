<template>
  <div class="container">
    <header>
      <img
        class="home"
        src="@/assets/name.svg"
        alt="Text - Emma Kate Parkinson"
      >
      <h2 class="sub-title">
        Digital Designer and Creative
      </h2>
    </header>

    <main>
      <div class="inner">
        <h1 v-if="error.statusCode === 404">
          Page not found
        </h1>
        <h1 v-else>
          An error occurred
        </h1>

        <nav>
          <ul class="nav-list">
            <li>
              <nuxt-link to="/" exact>
                Home
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/work">
                Work
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contact">
                Contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    error: { required: true, type: Object }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
}

header {
  height: var(--header-height);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  margin: 56px 0 16px;
}

img.home {
  width: 90vw;
  max-width: 600px;
}

main {
  height: 50vh;
  background: white;
  padding: 40px 5%;
}

li {
  margin: 8px 0;
}

@media screen and (min-width: 670px) {
  main .inner {
    max-width: 600px;
    margin: auto;
  }
}

@media screen and (min-width: 1100px) {
  header {
    padding: 0;
    width: 45%;
    position: fixed;
  }

  img.home {
    width: 40vw;
    max-width: none;
  }

  main {
    min-height: 100vh;
    margin-left: calc(45vw);
    padding-top: 150px;
  }

  main .inner {
    max-width: none;
  }
}
</style>
