<template>
  <section>
    <div class="page-header-space" />

    <main class="main-content">
      <section class="main-section">
        <div class="inner">
          <p>
            Currently Lead Content Writer & Designer for
            <a
              href="http://meahe.design/"
              target="_blank"
              rel="noreferrer noopener"
              class="link"
            >
              Meahe Design
            </a>
            , a London-based design agency.
          </p>
        </div>
      </section>

      <section class="main-section">
        <div class="inner">
          <p>I’m constantly looking for new ways to push myself as an artist.</p>
          <p>
            In the past, I worked as a Graphic Designer & Creative for
            <a
              href="https://minorentertainment.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="link"
            >
              Minor Entertainment
            </a>
            for 2 years.
          </p>
          <p>My time studying <b>BA Animation (Hons)</b> helped extend my technical skills, but I’m largely self-taught and constantly expanding my knowledge.</p>
        </div>
      </section>

      <section class="main-section">
        <div class="inner">
          <p>For most situations I’ll use the <b>Adobe Suite</b> (Premiere, Photoshop, Illustrator, InDesign, After Effects).</p>
          <p>For my UI/UX work I’ll use <b>Figma, Sketch & Affinity Designer</b>.</p>
          <p>For any sketches I’m comfortable working on <b>paper</b> or <b>Procreate</b>.</p>
        </div>
      </section>

      <section class="main-section">
        <div class="inner">
          <p>
            Check out more of
            <nuxt-link to="/work" class="link">
              my work
            </nuxt-link>
            or
            <nuxt-link to="/contact" class="link">
              get in touch.
            </nuxt-link>
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
  border-bottom: 8px solid var(--yellow);
}
</style>
