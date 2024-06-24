<script setup lang="ts">

</script>

<template>
    <section class="main__profile">
        <img src="@/assets/img/perfil.png">
        <div class="profile__name">
            <h1>Samuel Lopez</h1>
            <p>Desarrollador Web</p>
        </div>
        <div class="profile__social">
            <img src="@/assets/img/linkedin.png">
            <img src="@/assets/img/insta.png">
            <img src="@/assets/img/github.png">
        </div>
        <div class="profile__information">
            <div class="information__box">
                <div class="box box__country">
                    <div class="box__img country__img">
                        <img src="@/assets/img/country.svg">
                    </div>
                    <h2>Mexico</h2>
                </div>
                <div class="box box__phone">
                    <div class="box__img phone__img">
                        <img src="@/assets/img/phone.svg">
                    </div>
                    <h2>9812051517</h2>
                </div>
                <div class="box box__email">
                    <div class="box__img email__img">
                        <img src="@/assets/img/email.svg">
                    </div>
                    <h2>lopez180219@gmail.com</h2>
                </div>
            </div>
        </div>
        <div class="profile__cv">
            <a class="cv__button">
                Descargar CV
            </a>
        </div>
    </section>
</template>

<style scoped>

.main__profile{
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 625px;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
    background-color: var(--color-background);
    position: relative;

    font-family: "Prompt";
    font-size: 15px;
    font-weight: bold;
    color: var(--color-secundario);
}

.main__profile > img{
    position: absolute;
    top: -45px;
    right: 50%;
    transform: translateX(50%);
}

.profile__name{
    padding: 120px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.profile__name h1{
    font-family: "Prompt";
    font-weight: bold;
    font-size: 32px;
    color: var(--color-principal);
}

.profile__name p {
    font-family: "Prompt";
    font-weight: bold;
    font-size: 13px;
}

.profile__social{
    padding: 5px 0;
    display: flex;
    justify-content: center;
    gap: 5px;
}

.profile__information{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.information__box{
    display: flex;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    border-radius: 5px;
    padding: 40px 20px;
    gap: 20px;
    background-color: #F5F5F5;
}

.box{
    display: flex;
    gap: 30px;
}

.box .box__img{
    height: fit-content;
    width: 30px;
}

.box h2{
    font-family: "Prompt";
    font-weight: 600;
    font-size: 12px;
    color: #0033B7;
}

.profile__cv{
    padding: 20px 0 70px 0;
    display: flex;
    justify-content: center;
}

.profile__cv .cv__button{
    font-family: "Prompt";
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    background-color: var(--color-principal);
    border-radius: 3px;
    padding: 7px 30px;
    color: var(--white);
}
</style>