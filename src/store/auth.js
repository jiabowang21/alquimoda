import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        token: localStorage.getItem("token") || ""
    }),

    actions: {
        async login(credentials) {
            try {
                const response = await axios.post("/api/login", credentials);
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
            } catch (error) {
                console.error("Login failed", error);
            }
        },

        async register(credentials) {
            try {
                const response = await axios.post("/api/register", credentials);
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
            } catch (error) {
                console.error("Registration failed", error);
            }
        },

        logout() {
            this.token = "";
            localStorage.removeItem("token");
        }
    }
});
