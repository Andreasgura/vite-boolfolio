import { reactive } from "vue";

export const store = reactive({
    baseUrl: "https://http://127.0.0.1:8000/api",
    endPoints: {
        projects: "/projects",
        types: "/types"
    }
});