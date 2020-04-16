export default {
  setUsers (state, users) {
    state.users = state.users.concat(users)
  },
  setUser (state, user) {
    state.user = user
  },
  setUsersLoadStatus (state, status) {
    state.usersLoadStatus = status
  },
  setUsersPagination (state, pagination) {
    state.usersPagination = { ...state.usersPagination, ...pagination }
  }
}
