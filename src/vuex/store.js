import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import comp from './modules/global_comp'

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		app,
		comp
	},
	strict: process.env.NODE_ENV !== 'production'
})