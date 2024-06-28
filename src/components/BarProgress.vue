<script setup lang="ts">
defineProps({
    Title: String,
    Advance: String,
    Progress: String,
})
</script>

<template>
    <div class="progress__bar">
        <div class="section__name">
            <h4>{{ Title }}</h4>
            <h4>{{ Advance }}</h4>
        </div>
        <div class="section__progress">
            <progress min="0" max="100" :value="Progress"></progress>
        </div>
    </div>
</template>

<style scoped>
.progress__bar {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}

.section__name{
    display: flex;
    justify-content: space-between;
}

h4{
    font-family: "Radio Canada";
    font-weight: bold;
    font-size: 14px;
    color: black;
    padding: 0;
}

.section__progress{
    width: 100%;
}

progress {
    width: 100%;
    height: 15px;
    appearance: none;
}

progress::-webkit-progress-bar {
    background-color: #f0f0f0;
    border-radius: 5px;
}

progress::-webkit-progress-value {
    background-color: #3B83F7;
    border-radius: 5px;
}

progress::-moz-progress-bar {
    background-color: #3B83F7;
    border-radius: 5px;
}
</style>