<script setup>
  defineProps(['label', 'isActive']);
</script>

<template>
  <a 
    class="border-1 border-neutral rounded-sm p-2 flex gap-2 justify-center items-center max-w-1/12 w-full cursor-pointer"
    :class="{ 'bg-teal-100': isActive, 'bg-white': !isActive }"
  >
    {{label}}
  </a>
</template>