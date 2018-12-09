import * as types from './mutation-types'

const mutations = {
	[types.DATA](state, data) {
		state.data = data;
	},
	[types.TOKEN](state, token) {
		state.token = token;
	}
}
export default mutations