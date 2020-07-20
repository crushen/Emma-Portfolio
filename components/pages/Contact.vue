<template>
  <section>
    <div class="page-header-space" />

    <main class="main-content">
      <section class="main-section">
        <div class="inner">
          <h2>Great to have you here</h2>

          <p>
            For work enquires or any questions please do
            <a
              href="mailto:parkinson93@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
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
              rel="noreferrer noopener"
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
              rel="noreferrer noopener"
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
.main-section {
  border-bottom: 8px solid var(--red);
}

h2 {
  margin-bottom: 32px;
}

.link {
  color: var(--red);
}
</style>
