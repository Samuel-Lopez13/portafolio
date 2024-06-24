<script setup lang="ts">

</script>

<template>
    <section class="main__home">
        <div class="home__aboutme">
            <div class="title aboutme__title">
                <div class="img title__img">
                    <img src="@/assets/img/aboutme.svg">
                </div>
                <h3>Sobre <span>Mi</span></h3>
            </div>
            <div class="description aboutme__description">
                Soy un apasionado del aprendizaje constante y me considero autodidacta. Estudiante recién egresado de
                la facultad de Ingeniería en la carrera de Sistemas Computacionales, lo que me ha permitido desarrollar
                una sólida base en diversas áreas de la tecnología. Mi objetivo es seguir ampliando mis conocimientos y
                habilidades para enfrentar nuevos desafíos y contribuir de manera efectiva en proyectos innovadores.
            </div>
        </div>
        <div class="home__myarea">
            <div class="title myarea__title">
                <div class="img title__img">
                    <img src="@/assets/img/code.svg">
                </div>
                <h3>Mi <span>Área</span></h3>
            </div>
            <div class="area myarea__back">
                <h3>
                    Desarrollo Back-End
                </h3>
                <div class="description">
                    Como desarrollador junior full stack con experiencia en el desarrollo back-end utilizando .NET.
                    Estoy comprometido con el aprendizaje continuo y la mejora de mis habilidades para entregar
                    soluciones eficientes y de alta calidad.
                </div>
            </div>
            <div class="area myarea__front">
                <h3>
                    Desarrollo Front-End
                </h3>
                <div class="description">
                    Desarrollo de interfaces de usuario dinámicas y reactivas utilizando Vue.js. Experiencia en el uso
                    de Vuex para el manejo del estado de la aplicación y Vue Router para la gestión de rutas.
                </div>
            </div>
            <div class="area myarea__bd">
                <h3>
                    Base de datos
                </h3>
                <div class="description">
                    En los proyectos que he realizado, he tenido que fungir como creador de bases de datos, trabajando
                    con tecnologías como MySQL y SQL Server. Competente en el uso de Entity Framework para el mapeo
                    objeto-relacional
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main__home {
    width: calc(100% - 80px);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 50px;

    overflow-y: auto;
    scrollbar-width: none;
}

.home__aboutme{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.title{
    padding-bottom: 10px;
    display: flex;
    gap: 10px;
}

.title .img{
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
}

.title h3{
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 32px;
    color: #9B9B9B;
}

.title h3 span{
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 32px;
    color: var(--color-principal);
}

.description{
    font-family: "Prompt";
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    line-height: 1.5;
    color: var(--color-secundario);
}

.home__myarea{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.area{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.area h3{
    font-family: "Radio Canada";
    font-weight: 500;
    font-size: 20px;
    color: var(--color-principal);
}
</style>