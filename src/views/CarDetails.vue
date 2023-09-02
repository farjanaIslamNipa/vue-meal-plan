<template>
    <div class="h-screen flex justify-center mt-10">
        <div class="w-96 bg-gray-100 rounded-2xl shadow-lg p-5 mx-auto flex justify-center h-44">
            <div class="text-center">
                <h3 class="font-medium text-2xl">Name: {{ car.make }}</h3>
                <p class="text-base">Body: {{ car.body }}</p>
                <p class="text-base">Price: {{ car.price }}</p>
                <p class="text-base">Year: {{ car.year }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import{ref, onBeforeMount} from 'vue';
import { useRoute } from 'vue-router';
import carsData from '../data.json'

const route = useRoute()
const car = ref(null);
onBeforeMount(() => {
    car.value = carsData.find(c => c.id === parseInt(route.params.id))
})
console.log(car.value, 'var')
</script>

<style scoped>

</style>