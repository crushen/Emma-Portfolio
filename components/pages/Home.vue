<template>
  <section>
    <header class="page-header">
      <!-- <h1>Emma Kate Parkinson</h1> -->
      <img src="@/assets/name.svg" alt="Text - Emma Kate Parkinson">
      <h2 class="sub-title">Digital Designer and Creative</h2>
    </header>

    <main class="main-content">
      <section class="main-section">
        <div class="inner">
          <p>
            Currently Lead UI/UX Designer for
            <a
              href="http://meahe.design/"
              target="_blank"
              class="link"
            >
              Meahe Design.
            </a>
          </p>
        </div>
      </section>

      <section class="main-section">
        <div class="inner">
          <p>
            I’ve worked as a Graphic Designer for
            <a
              href="https://minorentertainment.com/"
              target="_blank"
              class="link"
            >
              Minor Entertainment
            </a>
            for 2 years, whilst simultaneously developing my skills as an artist.
          </p>
          <p><b>BA Animation (Hons)</b> helped extend my technical skills, but I’m largely self taught and constantly expanding my knowledge.</p>
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
  props: {
    pageColour: { required: true, type: String }
  }
}
</script>

<style scoped>
img {
  width: 90vw;
  margin: 56px 0 16px;
}

.main-section {
  border-bottom: 6px solid var(--yellow);
}
</style>
