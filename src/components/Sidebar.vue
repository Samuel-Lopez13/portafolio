<script setup lang="ts">

import Popup from "@/components/popup.vue";
import popup from "@/components/popup.vue";

const pop = () => {

}
</script>

<template>
    <section>
        <div class="section_select" @mouseover="pop">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3B83F7" d="M27.0207 12.8216L15.1942 0.995026C14.8643 0.66515 14.4318 0.5 13.9997 0.5C13.5676 0.5 13.1351 0.66515 12.8052 0.995026L0.978651 12.8216C0.318897 13.483 0.351843 14.5179 1.0116 15.1776C1.67304 15.8407 2.63986 15.9383 3.30173 15.2764L3.87869 14.6991V25.8426C3.87869 26.7765 4.63433 27.5322 5.5682 27.5322H12.3262V20.7741H15.7053V27.5322H22.4633C23.3972 27.5322 24.1528 26.7765 24.1528 25.8426V14.732L24.6575 15.2367C25.3173 15.8965 26.3255 15.8374 26.9874 15.1772C27.6476 14.5179 27.6822 13.4813 27.0207 12.8216Z"/>
            </svg>
            <div>
                <popup title="Inicio"></popup>
            </div>
        </div>
        <div class="section_select">
            <svg class="section_select" width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A7A7A7" d="M8.5321 7.49867V18.2272H8.54784C8.71089 20.3312 12.0977 22.0149 16.2618 22.0149C20.426 22.0149 23.8128 20.333 23.9759 18.2272H23.9911V7.49867H8.5321Z" stroke="#A2A6B0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill="#B6B6B6" d="M29.5 9.27614L16.0005 16.0201L2.5 9.27614L16.0005 2.53215L29.5 9.27614Z" stroke="#A2A6B0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.50049 18.6941V9.80916" stroke="#A2A6B0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
                <popup title="Estudios"></popup>
            </div>
        </div>
        <div class="section_select">
            <svg class="section_select" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A2A6B0" d="M12.65 16.2149H1.85V24.3149C1.85 25.031 2.13446 25.7177 2.64081 26.2241C3.14716 26.7304 3.83392 27.0149 4.55 27.0149H23.45C24.1661 27.0149 24.8528 26.7304 25.3592 26.2241C25.8655 25.7177 26.15 25.031 26.15 24.3149V16.2149H15.35V18.9149H12.65V16.2149ZM12.65 14.8649H0.5V6.76489C0.5 5.27989 1.715 4.06489 3.2 4.06489H8.6V2.71489C8.6 1.99881 8.88446 1.31205 9.39081 0.805704C9.89716 0.299356 10.5839 0.0148926 11.3 0.0148926L16.7 0.0148926C17.4161 0.0148926 18.1028 0.299356 18.6092 0.805704C19.1155 1.31205 19.4 1.99881 19.4 2.71489V4.06489H24.8C25.5161 4.06489 26.2028 4.34936 26.7092 4.8557C27.2155 5.36205 27.5 6.04881 27.5 6.76489V14.8649H15.35V12.1649H12.65V14.8649ZM16.7 4.06489V2.71489H11.3V4.06489H16.7Z"/>
            </svg>
            <popup title="Proyectos"></popup>
        </div>
        <div class="section_select">
            <svg class="section_select" width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A2A6B0" fill-rule="evenodd" clip-rule="evenodd" d="M14 12.6003L11.2021 10.2808L1.44077 20.2733H26.3112L16.7295 10.2639L14 12.6003ZM18.1259 9.20334L27.4089 18.855C27.462 18.6677 27.5 18.4736 27.5 18.2686V1.58595L18.1259 9.20334ZM0.5 1.54715V18.2686C0.5 18.4736 0.53797 18.6677 0.591126 18.855L9.90528 9.23455L0.5 1.54715ZM26.6562 0.0148926H1.34375L14 10.1559L26.6562 0.0148926Z"/>
            </svg>
            <popup title="Contactame"></popup>
        </div>
    </section>
</template>

<style scoped>
    section{
        width: 80px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-top: 50px;
        border: 0.3px solid rgba(0, 0, 0, 0.1);
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.25);
    }

    .section_select{
        cursor: pointer;
        position: relative;
    }

    .section_select > div > popup{
        background-color: #2c3e50 !important;
    }
</style>