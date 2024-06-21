<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
    title: String,
})
</script>

<template>
    <div>
        <h3>
            {{ title }}
        </h3>
    </div>
</template>

<style scoped>
    div{
        height: fit-content;
        width: fit-content;
        padding: 8px 16px;
        border-radius: 5px;
        position: absolute;
        right: 45px;
        top: -5px;
        z-index: 2;
        background-color: var(--color-principal);
    }

    div::after{
        content: '';
        z-index: 1;
        position: absolute;
        top: 50%;
        width: 15px;
        height: 15px;
        transform: translateY(-50%) rotate(45deg);
        background-color: var(--color-principal);
        right: -7px;
    }

    h3{
        color: var(--white);
    }
</style>