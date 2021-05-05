<template>
  <div>
    <div>{{ msg }}</div>
    <SlotDemo>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </SlotDemo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SlotDemo from '@/components/SlotDemo.vue'
export default defineComponent({
  name: 'HelloWorld',
  props: ['msg'],
  components: {
    SlotDemo
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
