import router from "@/router/index";

export const goToHome = () => {
    router.push({ name: 'home' })
}

export const goToStudies = () => {
    router.push({ name: 'studies' })
}

export const goToProjects = () => {
    router.push({ name: 'projects' })
}

export const goToContacMe = () => {
    router.push({ name: 'contactme' })
}