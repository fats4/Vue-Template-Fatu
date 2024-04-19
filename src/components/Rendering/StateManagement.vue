<script setup>
import { useCounterStore } from '../../stores/counter';

const store = useCounterStore();

</script>

<template>
    <div>
        <table class="w-full border border-black">
            <thead>
                <tr>
                    <th class="bg-gray-200 px-4 py-2 border border-black">NAME</th>
                    <th class="bg-gray-200 px-4 py-2 border border-black">QUANTITY</th>
                    <th class="bg-gray-200 px-4 py-2 border border-black">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in store.items" :key="index">
                    <td class="bg-gray-200 px-4 py-2 text-center border border-black">{{ item.name }}</td>
                    <td class="bg-gray-200 px-4 py-2 text-center border border-black">{{ item.quantity }}</td>
                    <td class="bg-gray-200 px-4 py-2 text-center border border-black space-x-3">
                        <button @click="store.increment(index)" class="custom-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                        <button @click="store.decrement(index)" class="custom-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

