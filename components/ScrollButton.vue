<template>
  <div class="wrapper" :style="{ top: `${page.height - 80}px` }">
    <div id="scroll-background" />
    <div id="button-container">
      <button name="scroll to top" @click="scrollTop">
        <div class="arrow-up" :style="{borderBottom: `16px solid ${page.colour}` }" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapState(['page'])
  },
  methods: {
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 60px;
  height: 60px;
  position: absolute;
  right: 16px;
  z-index: 20;
  overflow: visible;
}

#button-container,
#scroll-background {
  width: 60px;
  height: 60px;
  position: absolute;
}

#button-container {
  background: white;
  border: 3px solid var(--dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: 0;
  left: 0;
}

#scroll-background {
  background: var(--dark-grey);
  right: 20px;
  top: 4px;
  right: 4px;
}

button {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-up {
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid black;
}
</style>
