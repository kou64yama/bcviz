<template>
  <div class="px-4 pb-4 flex justify-end">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
:deep(> *:not(:first-child)) {
  @apply ml-1;
}

:deep(> *:not(:last-child)) {
  @apply mr-1;
}
</style>
