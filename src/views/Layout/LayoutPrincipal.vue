<script setup lang="ts">
import Perfil from "@/components/Perfil.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
    <main>
        <section>
            <Perfil/>
        </section>
        <section class="main_info">
            <router-view/>
            <sidebar/>
        </section>
    </main>
</template>

<style scoped>

main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-image: url("../../assets/img/bg-principal.png");
}

.main_info {
    width: 1000px;
    height: 625px;
    background-color: var(--color-background);
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}
</style>