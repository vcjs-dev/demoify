<template>
  <main class="home-main">
    <DemoPanel
      title="This is a title"
      description="This is a description"
      :initial-expand="true"
    >
      A demo Show

      <template #code>
        <pre class="lang-markup">
          <code>    
          {{`<div>demo</div>`}}
        </code></pre>
      </template>
    </DemoPanel>
  </main>
</template>

<script lang="ts" setup>
import prism from 'prismjs'
import { onMounted } from 'vue'

onMounted(() => {
  prism.highlightAll()
})
</script>

<style lang="scss" scoped>
.home-main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
