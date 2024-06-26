import { reactive } from "vue";

export const store = reactive({
    baseUrl: "http://127.0.0.1:8000/api",
    endPoints: {
        projects: "/projects",
        types: "/types",
        technologies: "/technologies",
        contacts: "/contacts",
    },
    technologies: [],
    types: [],
});