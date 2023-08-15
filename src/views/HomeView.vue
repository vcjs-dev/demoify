<template>
  <main>
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
