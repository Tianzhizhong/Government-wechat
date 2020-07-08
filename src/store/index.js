
export default {

    state: {
        userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : ''
    },

    mutations: {
        changeLogin(state, user) {

            state.userToken = user.userToken;

            localStorage.setItem('userToken', user.userToken);

        }
    },
    actions: {
    }

}
