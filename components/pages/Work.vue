<template>
  <section>
    <div class="page-header-space" />

    <main class="main-content">
      <section class="main-section">
        <div class="title">
          <h2>Meahe Design</h2>
        </div>

        <div class="inner">
          <p>Lead UI/UX Designer.</p>
          <p>Currently working on an web app designed to overhaul the issues within the UK’s visa system. The service will provide a way to access visa information easier and plan your future before you commit to the expensive application fees.</p>
          <p>Prototype coming soon...</p>
          <a
            href="https://www.salmo.uk/"
            class="link"
            target="_blank"
          >
            salmo.uk
          </a>
        </div>
      </section>

      <section class="main-section">
        <div class="title">
          <h2>Minor Entertainment</h2>
        </div>

        <div class="inner">
          <p>Assistant Graphic Designer & Lead Video Editor.</p>
          <p>Created and managed online content for the popular In the Night Garden Live show. Tasks included creating a variety of social media posts and creating ad campaigns.</p>
          <a
            href="https://www.instagram.com/nightgardenlive/"
            class="link"
            target="_blank"
          >
            In the Night Garden Live Instagram
          </a>
        </div>
      </section>

      <section class="main-section">
        <div class="title">
          <h2>Family Tickets</h2>
        </div>

        <div class="inner">
          <p>Assistant Graphic Designer & Lead Video Editor.</p>
          <p>Helped design web content for the site to help sell a variety of shows from Bing Live to Lion King. Tasks included creating engaging ad campaigns and banners for the site to encourage sales. Also created and curated trailers for social media.</p>
          <a
            href="https://www.familytickets.com/"
            class="link"
            target="_blank"
          >
            familytickets.com
          </a>
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
.title {
  border-bottom: 8px solid var(--blue);
}

h2 {
  width: 90%;
  max-width: 520px;
  margin: auto;
}

.main-section .inner {
  margin-top: 16px;
}

.link {
  color: var(--blue);
  display: block;
  margin-top: 16px;
}

@media screen and (min-width: 1100px) {
h2 {
  width: 82%;
}
}
</style>
