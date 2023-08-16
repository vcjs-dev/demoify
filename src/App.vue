<template>
  <div>
    <DemoHeader
      logoText="DE"
      title="Demoify"
      titleLink="/"
      :rightLinks="[
        { href: '/', title: 'Documentation' },
        { href: '/', title: 'Changelog' },
        { href: '/', title: 'Github' },
      ]"
    />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { DemoHeader } from './lib'
</script>
