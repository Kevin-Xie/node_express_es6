import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    	login: false,
    	user: {},
    },
    mutations: {
    	userOnline(state, user) {
    		state.login = true;
    		state.user = user;
    	},
    	userOffline(state) {
    		state.login = false;
    		state.user = {};
    	}
    }
});

