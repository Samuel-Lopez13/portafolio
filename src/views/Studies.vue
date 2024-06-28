<script setup lang="ts">
import BarProgress from "@/components/BarProgress.vue";
</script>

<template>
    <section class="main__studies">
        <div class="studies__studies">
            <div class="title studies__title">
                <div class="img title__img">
                    <img src="@/assets/img/studyblue.svg">
                </div>
                <h3>Mis <span>Estudios</span></h3>
            </div>
            <div class="studies__training">
                <h2>Formación</h2>
                <div class="training training__university">
                    <div class="title university__title">
                        <h2>
                            Ingenieria en Sistemas Computacionales
                        </h2>
                        <p>ago 2020 - jun 2024</p>
                    </div>
                    <p>Universidad Autonóma de Campeche</p>
                </div>
            </div>
        </div>
        <div class="studies__technologies">
            <div class="title technologies__title">
                <div class="img technologies__img">
                    <img src="@/assets/img/computer.png">
                </div>
                <h3>Tecnologías <span>ulizadas</span></h3>
            </div>
            <div class="technologies__lenguages">
                <h2>
                    Lenguajes de programacíon
                </h2>
                <div class="lenguages__Skills">
                    <img src="@/assets/img/Lenguages/csharp.png">
                    <img src="@/assets/img/Lenguages/.net.png">
                    <img src="@/assets/img/Lenguages/vue.png">
                    <img src="@/assets/img/Lenguages/js.png">
                    <img src="@/assets/img/Lenguages/html.png">
                    <img src="@/assets/img/Lenguages/css.png">
                    <img src="@/assets/img/Lenguages/tailwind.png">
                    <img src="@/assets/img/Lenguages/mysql.png">
                </div>
            </div>
        </div>
        <div class="studies__skills">
            <h2>Habilidades</h2>
            <div class="skills__bar">
                <BarProgress Title="C# .Net" Advance="Intermedio" Progress="80"/>
                <BarProgress Title="Vue3" Advance="Intermedio" Progress="77"/>
                <BarProgress Title="JavaScript" Advance="Intermedio" Progress="70"/>
                <BarProgress Title="HTML5 / CSS3" Advance="Intermedio" Progress="85"/>
                <BarProgress Title="Tailwind CSS" Advance="Intermedio" Progress="68"/>
                <BarProgress Title="MySQL" Advance="Principiante" Progress="50"/>
                <BarProgress Title="SQL Server" Advance="Principiante" Progress="50"/>
            </div>
        </div>
    </section>
</template>

<style scoped>

.main__studies {
    width: calc(100% - 80px);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 50px;

    overflow-y: auto;
    scrollbar-width: none;
}

.studies__studies {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.title {
    padding-bottom: 10px;
    display: flex;
    gap: 10px;
}

.title .img {
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
}

.title h3 {
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 32px;
    color: #9B9B9B;
}

.title h3 span {
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 32px;
    color: var(--color-principal);
}

.studies__training {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.studies__training h2 {
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 20px;
    color: #3B83F7;
}

.training {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.training .title {
    display: flex;
    justify-content: space-between;
    padding: 0;
}

.training .title h2 {
    font-family: "Prompt";
    font-weight: 500;
    font-size: 16px;
    color: black;
}

.training .title p {
    font-family: "Prompt";
    font-weight: 500;
    font-size: 14px;
    color: #2D81FE;
}

.training p {
    font-family: "Prompt";
    font-weight: 500;
    font-size: 12px;
    color: #2D81FE;
}

.studies__technologies {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 10px;
}

.technologies__lenguages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.technologies__lenguages h2 {
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 20px;
    color: #3B83F7;
}

.lenguages__Skills {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px 0;
}

.studies__skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.studies__skills h2 {
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 20px;
    color: #3B83F7;
}

.skills__bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>