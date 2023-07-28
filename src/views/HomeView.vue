<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
})
</script>

<template>
 <div class="container mx-auto">
    <div class="mb-4 pt-10">
      <input type="search" placeholder="Search for meals" class="border py-2 px-3 rounded-md w-80">
    </div>
    <div class="flex flex-wrap gap-4 justify-center font-medium text-gray-600">
      <RouterLink :to="{name:'byLetter', params:{letter}}" v-for="letter in letters" :key="letter" class="bg-gray-50 px-2 rounded-sm hover:bg-slate-200 duration-100 transition-all">{{ letter }}</RouterLink>
    </div>
 </div>
</template>
