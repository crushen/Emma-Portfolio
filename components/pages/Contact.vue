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
            Feel free to check out my visual portfolio on
            <a
              href="https://dribbble.com/emma-parkinson"
              target="_blank"
              rel="noreferrer noopener"
              class="link"
            >
              Dribbble
            </a>
            , or follow me on
            <a
              href="https://letterboxd.com/emmakparkinson"
              target="_blank"
              rel="noreferrer noopener"
              class="link"
            >
              Letterboxd
            </a>
            (if you're a fan of random movie reviews and memes).
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
