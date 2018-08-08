import * as types from './mutation-types'

const mutations = {
	[types.COMP_CONFIRM](state, data) {
		state.comp_confirm = data;
	},
	[types.COMP_MESSAGE](state, data) {
		state.comp_message = data;
	}
}
export default mutations