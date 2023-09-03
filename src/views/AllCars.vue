<template>
    <div class="bg-white p-10 mx-auto h-screen">
        <div class="container bg-gray-100 p-10 rounded-xl shadow-md">
            <h2 class="text-2xl font-medium text-center mb-4">All Cars</h2>
            <div class="flex justify-center">
                <select v-model="selectedCar" name="" id="" class="w-2/3 mb-6 rounded-md px-2 py-3 focus:none outline-none">
                    <option value="all">All</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Buick">Buick</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Audi">Audi</option>
                </select>
            </div>
            <div class="grid grid-cols-4 justify-center gap-5">
                <div 
                v-for="car in cars" 
                :key="car.id" 
                @click="viewCarDetails(car.id)"
                class="bg-white rounded-2xl shadow-sm px-8 py-5 text-center cursor-pointer hover:shadow-lg transition-all duration-100">
                    <h3 class="font-medium text-2xl">{{ car.make }}</h3>
                    <p class="text-base">{{ car.body }}</p>
                    <p class="text-base">{{ car.price }}</p>
                    <p class="text-base">{{ car.year }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import{ref, onMounted, watch} from'vue';
import carsData from '../data.json'
import {useRouter} from 'vue-router'

const cars = ref([]);
onMounted(() => cars.value = carsData)

const selectedCar = ref('')

const router = useRouter();
const viewCarDetails = (id) => {
    router.push('/car/' + id)
}

watch(selectedCar, () => {
    if(selectedCar.value){
        if(selectedCar.value === 'all') cars.value = carsData;
        else{
            cars.value = carsData.filter(c => c.make === selectedCar.value)
        }
    }
})
</script>

<style scoped>

</style>