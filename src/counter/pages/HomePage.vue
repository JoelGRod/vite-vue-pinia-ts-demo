<template>
    <h1>
        Counter Home Page: {{ counterStore.counter }}
    </h1>

    <h3>
        Number of changes: {{ counterStore.numberOfChanges }}
    </h3>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../../store/counter';

const counterStore = useCounterStore();


</script>
