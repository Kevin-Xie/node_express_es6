import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    	signin: true,
    },
    mutations: {
    	changeLoginStatus(state) {
    		state.signin = !state.signin;
    	}
    }
});
