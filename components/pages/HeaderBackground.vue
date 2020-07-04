<template>
  <div :style="{ backgroundColor: pageColour }" />
</template>

<script>
export default {
  props: {
    pageColour: { required: true, type: String }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 40vh;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  transition: 0.3s;
}
</style>
