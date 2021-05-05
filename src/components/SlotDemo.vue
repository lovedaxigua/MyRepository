<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <div>footer</div>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SlotDemo'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
