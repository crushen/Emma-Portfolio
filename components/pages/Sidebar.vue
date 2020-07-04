<template>
  <div class="container">
    <div id="bar">
      <div class="inner">
        <div
          v-for="i in 100"
          :key="i"
          class="line"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: { required: true, type: String }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
}

#bar {
  width: 50px;
  height: 600px;
  border: 8px solid green;
  overflow: hidden;
}

.inner {
  height: 600px * 3;
  width: 60px;
  transform: translateX(-600px * 2);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  transition: 1.5s;
}

.line {
  height: 16px;
  width: 100%;
  background: green;
  /* position: absolute; */
  margin-top: 16px;
  transform: translate(-10px, -10px) rotate(-30deg);
}
</style>
