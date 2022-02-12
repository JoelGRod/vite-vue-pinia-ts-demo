<template>
    <h1>
        Counter Page: {{ counterStore.counter }}
    </h1>

    <button @click="incrementBy(1)">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <!-- <button @click="counterStore.incrementBy(1)">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(5)">+5</button> -->
</template>

<script lang="ts" setup>
import { useCounterStore } from "../../store/counter"

const counterStore = useCounterStore()

const incrementBy = (value: number) => {
    counterStore.incrementBy(value);
}

</script>
