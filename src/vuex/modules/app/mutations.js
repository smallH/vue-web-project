import * as types from './mutation-types'

const mutations = {
	[types.START_LOADING](state) {
		state.loading = true;
	},
	[types.FINISH_LOADING](state) {
		state.loading = false;
	},
	[types.DATA](state, data) {
		state.data = data;
	},
	[types.API_TOKEN](state, token) {
		state.apiToken = token;
	}
}
export default mutations