<template>
    <div class="bg-white p-10 mx-auto h-screen">
        <div class="container mx-auto bg-gray-100 p-10 rounded-xl shadow-md">
            <h2 class="text-2xl font-medium text-center mb-4">All Cars</h2>
            <div class="mx-20 flex gap-5">
                <div class="w-full">
                    <label class="block" for="">Price:</label>
                    <select @click="handleFilter" v-model="selectedPrice" name="" id="" class="w-full mb-6 rounded-md px-2 py-3 focus:none outline-none">
                        <option value="any">Any</option>
                        <option value="htl">High to low</option>
                        <option value="lth">Low to hight</option>
                    </select>
                </div>
                <div class="w-full">
                    <label class="block" for="">Make:</label>
                    <select @click="handleFilter" v-model="selectedCar" name="" id="" class="w-full mb-6 rounded-md px-2 py-3 focus:none outline-none">
                        <option value="all">ALL</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Buick">Buick</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Audi">Audi</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-4 justify-center gap-5">
                <div 
                v-for="car in cars" 
                :key="car.id" 
                @click="viewCarDetails(car.id)"
                class="bg-white rounded-2xl shadow-sm px-8 py-5 text-center cursor-pointer hover:shadow-lg transition-all duration-100">
                    <h3 class="font-medium text-2xl">{{ car.make }}</h3>
                    <p class="text-base"><b>Price:</b> {{ car.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import{ref, onMounted, watch} from'vue';
import carsData from '../data.json'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute();

const cars = ref([]);
const selectedCar = ref('')
const selectedPrice = ref('')

onMounted(() => cars.value = carsData)
onMounted(() => selectedCar.value = route.query.make || '')

const viewCarDetails = (id) => {
    router.push('/car/' + id)
}

watch([selectedCar, selectedPrice], () => {
    if(selectedCar.value){
        if(selectedCar.value === 'all') cars.value = carsData;
        else{
            cars.value = carsData.filter(c => c.make === selectedCar.value)
        }
    }

    if(selectedPrice.value){
        if(selectedPrice.value === 'any') return cars.value = carsData
        else {
            cars.value = cars.value.sort((a, b) => {
            if(selectedPrice.value === 'htl') return b.price - a.price 
            else return a.price - b.price
        })
        }

    }
})

const handleFilter = () => {
    router.push({query: {make: selectedCar.value, price: selectedPrice.value}})
}
</script>

<style scoped>

</style>