const auth = {
    login(userInfo) {
        localStorage.setItem('auth', JSON.stringify(userInfo));
    },

    getUserProfile() {
        return delete JSON.parse(localStorage.getItem('auth')).access_token;
    },

    getAccessToken() {
        return JSON.parse(localStorage.getItem('auth')).access_token;    
    },

    logout() {
        if (localStorage.getItem('auth'))
            localStorage.removeItem('auth');
    },

    isLogin() {
        const authData = localStorage.getItem('auth');
        return authData && JSON.parse(authData).access_token;
    }
}

export { auth };