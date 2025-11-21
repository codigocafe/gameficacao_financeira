<script setup>
  defineProps(['sumTotal', 'meta'])
</script>

<template>
  <div class="bg-stone-50 py-2 px-3 rounded-sm border-1 border-stone-200">
    {{ sumTotal.toLocaleString("pt-br", {
      "style": "currency",
      "currency": "BRL"}
    ) }} / {{ meta.toLocaleString("pt-br", {
      "style": "currency",
      "currency": "BRL"}
    ) }}
  </div>
</template>