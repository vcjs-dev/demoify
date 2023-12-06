<template>
  <div class="demo-main">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoMain',
})
</script>

<style lang="scss" scoped>
.demo-main {
  flex: 1;
  max-height: calc(100vh - var(--demoify-header-height));
  overflow-y: auto;
}
</style>
