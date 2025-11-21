<script setup>
  import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
  import Button from '../components/forms/Button.vue'
  import { Storage } from '../core/Storage'
  const current = defineModel()
  const status = ref( Storage.load() );

  onBeforeMount(() => {
    current.value = Object.keys(status.value)
      .filter( index => status.value[index] )
      .map(( index ) => parseInt(index) + 1 )
      .reduce((sum, num) => sum + num, 0)
  })

  onUpdated(() => { 
    Storage.save( status.value ) 
  })
</script>

<template>
  <section class="max-w-6xl mt-3 w-full m-auto">
    <form class="m-0 mx-auto p-0 w-full gap-4 flex flex-wrap justify-center">
      <Button v-for="n in 365" :label="n" :isActive="status[n - 1]"
        @click="() => {
          status[n - 1] = !status[n - 1]
          current = (status[n - 1]) ? current += n : current -= n
        }" />
    </form>
  </section>
</template>