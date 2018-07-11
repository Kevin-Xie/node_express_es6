import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    	login: true,
    },
    mutations: {
    	changeLoginStatus(state) {
    		state.login = !state.login;
    	}
    }
});

