<template>
  <section>
    <div class="page-header-space" />

    <main class="main-content">
      <section class="main-section">
        <div class="title">
          <h2>Content Writer</h2>
        </div>

        <div class="inner">
          <p>
            Whilst working for Meahe Design for the last year, I’ve written all the content for our upcoming online visa assistant,
            <a
              href="https://www.salmo.uk/"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Salmo.
            </a>
          </p>

          <p>
            Mainly I’ve been reading through all the legal documentation for
            <a
              href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/919609/Global_Talent_guidance.pdf"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              each visa,
            </a>
            then translating that into a more
            <a
              href="/global-talent.pdf"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              user-friendly language and format.
            </a>
          </p>

          <p>This gave me experience in creating a consistent brand style and tone of voice.</p>
        </div>
      </section>

      <section class="main-section">
        <div class="title">
          <h2>Designer & Creative</h2>
        </div>

        <div class="inner">
          <p>
            Whilst working for Meahe Design for the last year I have also created the illustrations and visual branding for
            <a
              href="https://www.salmo.uk/"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Salmo.
            </a>
          </p>

          <p>
            My main task has been creating from scratch a set of relatable characters which are all-inclusive, friendly but also professional. This then translated well into
            <a
              href="/salmo-instagram-posts.pdf"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              social posts
            </a>
            helping to explain the concept of Salmo.
          </p>

          <p>
            I also had social media, Google Ad and email design experience with my time working on
            <a
              href="https://www.instagram.com/nightgardenlive/?hl=en"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              In the Night Garden Live.
            </a>
            During this time I also created their
            <a
              href="https://www.youtube.com/watch?v=bWupaM4Zzx0"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              2019 tour trailer.
            </a>
          </p>

          <p>This gave me experience in creating a friendly image which communicates well with consumers.</p>
        </div>
      </section>

      <section class="main-section">
        <div class="title">
          <h2>UI/UX Designer</h2>
        </div>

        <div class="inner">
          <p>
            Whilst working for Meahe Design for the last year, I have also worked alongside the project manager to create the UI/UX for
            <a
              href="https://www.salmo.uk/"
              class="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Salmo.
            </a>
          </p>

          <p>I assisted in the visual design of the site alongside creating the flow for the user.</p>

          <p>This gave me experience in working alongside other designers and creating access friendly sites.</p>
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
  color: #0066CC;
  margin-top: 16px;
}

@media screen and (min-width: 1100px) {
  h2 {
    width: 82%;
  }
}
</style>
