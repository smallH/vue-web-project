import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import comp from './modules/global_comp'

Vue.use(Vuex);

//strict：true 在严格模式下，只要 Vuex 状态在 mutation 方法外被修改就会抛出错误。这确保了所有状态修改都会明确的被调试工具跟踪。
export default new Vuex.Store({
	modules: {
		app,
		comp
	},
	strict: process.env.NODE_ENV !== 'production'
})