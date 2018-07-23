import * as types from './mutation-types'

const mutations = {
	[types.START_LOADING](state) {
		state.loading = true;
	},
	[types.FINISH_LOADING](state) {
		state.loading = false;
	},
	[types.SET_DATA](state, data) {
		state.data = data;
	}
}
export default mutations