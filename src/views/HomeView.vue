<template>
  <main class="home-main">
    <DemoPanel title="This is a title" description="This is a description">
      demo

      <template #code>
        <pre class="lang-markup">
          <code>    
          {{ `
        <div>demo</div>
        ` }}
        </code></pre>
      </template>
    </DemoPanel>
  </main>
</template>

<script lang="ts" setup>
import 'prismjs'
</script>

<style lang="scss" scoped>
.home-main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
