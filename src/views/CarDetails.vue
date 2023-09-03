<template>
    <div class="h-screen flex justify-center mt-10">
        <div class="w-96 bg-gray-100 rounded-2xl shadow-lg p-5 mx-auto flex justify-center h-52">
            <div class="text-center">
                <h3 class="font-medium text-2xl">Name: {{ car.make }}</h3>
                <p class="text-base">Body: {{ car.body }}</p>
                <p class="text-base">Price: {{ car.price }}</p>
                <p class="text-base">Year: {{ car.year }}</p>
                <button @click="router.back()" class="bg-indigo-200 px-4 py-2 rounded-xl mt-3">Back</button>
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import{ref, onBeforeMount} from 'vue';
import {RouterView} from 'vue-router'
import { useRoute, useRouter } from 'vue-router';
import carsData from '../data.json'

const route = useRoute()
const router = useRouter()
const car = ref(null);
onBeforeMount(() => {
    car.value = carsData.find(c => c.id === parseInt(route.params.id))
})
console.log(car.value, 'var')
</script>

<style scoped>

</style>