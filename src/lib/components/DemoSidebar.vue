<template>
  <div class="demo-sidebar">
    <div class="demo-sidebar__content">
      <div v-for="(v, i) in items" :key="i" class="demo-sidebar__group">
        <div class="demo-sidebar__group-title">{{ v.groupTitle }}</div>
        <div class="demo-sidebar__group-menus">
          <div
            v-for="(e, j) in v.menus"
            :key="j"
            class="demo-sidebar__group-menu-item"
          >
            <RouterLink :to="e.to">{{ e.title }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'DemoSidebar',
})

withDefaults(
  defineProps<{
    items?: Array<{
      groupTitle: string
      menus: Array<{
        title: string
        to: string
      }>
    }>
  }>(),
  {
    items: () => [
      {
        groupTitle: '布局',
        menus: [
          { title: 'DemoContainer 容器', to: '/' },
          { title: 'DemoHeader 头部导航', to: '/' },
          { title: 'DemoSidebar 侧边栏', to: '/' },
          { title: 'DemoMain 主体', to: '/' },
        ],
      },
      {
        groupTitle: '演示组件',
        menus: [{ title: 'DemoPanel 示例面板', to: '/' }],
      },
    ],
  },
)
</script>

<style lang="scss" scoped>
.demo-sidebar {
  width: 240px;
  border-right: 1px solid var(--demoify-border-color);
  height: calc(100vh - var(--demoify-header-height));
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 10px 16px 16px;
  box-sizing: border-box;

  &__group {
    margin-bottom: 20px;
    padding-left: 16px;
  }

  &__group-title {
    padding: 12px 0;
    font-weight: bold;
    color: var(--demoify-title-color);
  }

  &__group-menu-item {
    margin-bottom: 10px;
    font-size: 14px;
    a {
      color: var(--demoify-text-color);
      text-decoration: none;

      &:hover {
        color: var(--demoify-primary-color);
      }
    }
  }
}
</style>
