const mutations = {
  SET_APP_NAME(state, params) {
    state.appName = params;
  },
  SET_APP(state, params) {
    state.appName = params.appName;
  },
};
export default mutations;
