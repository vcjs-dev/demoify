<template>
  <div class="demo-container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoContainer',
})
</script>

<style lang="scss" scoped>
.demo-container {
  display: flex;
}
</style>
