import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuth = defineStore('auth', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')));
    const token = ref(localStorage.getItem('token'));

    function setToken(tokenValue){
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function setUser(userValue){
        localStorage.setItem('user', userValue);
        user.value = userValue;
    }

    return { setToken, setUser }
});


