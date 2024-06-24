<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
    title: String,
})
</script>

<template>
    <div class="box">
        <h3 class="box__title">
            {{ title }}
        </h3>
    </div>
</template>
<style scoped>

.box {
    display: none;
    background-color: var(--color-principal);
    height: fit-content;
    width: fit-content;
    padding: 6px 12px;
    border-radius: 5px;
    position: absolute;
    right: 45px;
    top: -3px;
    z-index: 2;
}

.box::after {
    content: '';
    background-color: var(--color-principal);
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: -5px;
    transform: translateY(-50%) rotate(45deg);
    z-index: 1;
}

.box__title {
    font-size: 12px;
    color: var(--white);
}
</style>