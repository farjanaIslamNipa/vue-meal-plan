<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="bg-sky-50 shadow py-5">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <RouterLink :to="{name: 'home'}" class="font-medium">Home</RouterLink>

          <div class="flex gap-x-8">
            <RouterLink :to="{name: 'byName', params:'name'}" class="font-medium">Search by name</RouterLink>
            <RouterLink :to="{name: 'byLetter', params: 'letter'}" class="font-medium">Search by letter</RouterLink>
            <RouterLink :to="{name: 'byIngredients', params: 'ingredients'}" class="font-medium">Search by ingredients</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mx-auto">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
