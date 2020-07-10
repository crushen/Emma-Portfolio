<template>
  <section>
    <header class="page-header">
      <img src="@/assets/contact.svg" alt="Text - Emma Kate Parkinson">
    </header>

    <main class="main-content">
      <section class="main-section">
        <div class="inner">
          <p>Great to have you here!</p>

          <p>
            For work enquires or any questions please do
            <a
              href="mailto:parkinson93@gmail.com"
              target="_blank"
              class="link"
            >
              email me.
            </a>
          </p>

          <p>
            Or feel free to follow me on
            <a
              href="https://twitter.com/EmmaKParky"
              target="_blank"
              class="link"
            >
              Twitter
            </a>
            (if you’re a fan of random movie references and memes).
          </p>

          <p>
            You can also check out my
            <a
              href="https://www.instagram.com/emmakparkinsonart/"
              target="_blank"
              class="link"
            >
              Instagram
            </a>
            to get a sample of my illustration work.
          </p>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('updateHeight')
  }
}
</script>

<style scoped>
img {
  width: 60vw;
}

.main-section {
  border-bottom: 8px solid var(--red);
}

.link {
  color: var(--red);
}
</style>
