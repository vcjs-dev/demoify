<template>
  <div class="demo-header">
    <div class="demo-header__left">
      <div class="logo">
        <slot name="logo">
          <span>{{ logoText }}</span>
        </slot>
      </div>
      <div class="title">
        <a :href="titleLink" target="_blank">{{ title }}</a>
      </div>
      <slot name="left" />
    </div>

    <div class="demo-header__right">
      <slot name="right" />
      <a v-for="(v, i) in rightLinks" :key="i" :href="v.href" target="_blank">
        {{ v.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    logoText?: string
    title?: string
    titleLink?: string
    rightLinks?: Array<{
      href: string
      title: string
    }>
  }>(),
  {},
)
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DemoHeader',
})
</script>

<style lang="scss" scoped>
.demo-header {
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;
  position: sticky;
  left: 0;
  top: 0;

  .logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(180deg, #f36c45 20%, #e75755);
    border-radius: 2px;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    line-height: 1.2em;
    font-weight: bold;
    font-style: italic;
  }

  a {
    &:any-link {
      color: var(--demoify-text-color);
      text-decoration: none;
      font-family: var(--demoify-font-family);
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__left {
    display: flex;
    align-items: center;

    .title {
      margin-left: 20px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    a {
      margin-left: 16px;
    }
  }
}
</style>
