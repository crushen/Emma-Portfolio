<template>
  <section>
    <header
      :style="{backgroundColor: pageColour}"
      class="page-header"
    >
      <h1>Contact</h1>
    </header>
  </section>
</template>

<script>
export default {
  props: {
    pageColour: { required: true, type: String }
  }
}
</script>
