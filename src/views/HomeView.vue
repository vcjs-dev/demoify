<template>
  <main>
    <DemoPanel title="This is a title" description="This is a description">
      demo

      <template #code>
        {{ `
        <div>demo</div>
        ` }}
      </template>
    </DemoPanel>
  </main>
</template>
