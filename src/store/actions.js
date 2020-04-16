export default (config, API) => {
  return {
    getUsers: async (context, page) => {
      return new Promise((resolve, reject) => {
        context.commit('setUsersLoadStatus', 1)
        API.get(`users?page=${page}&per_page=${context.getters.usersPagination.per_page}`).then(res => {
          console.log('*[res]', res)
          if (res.status === 200) {
            context.commit('setUsers', res.data.data)
            context.commit('setUsersPagination', {
              total: res.data.total,
              total_pages: res.data.total_pages
            })
            // load next chunk and till the end
            if (res.data.page < res.data.total_pages) {
              setTimeout(() => {
                context.dispatch('getUsers', page + 1)
              }, 360)
            } else {
              context.commit('setUsersLoadStatus', 0)
              resolve()
            }
          } else {
            context.commit('setUsersLoadStatus', 0)
            reject()
          }
        }).catch(() => {
          context.commit('setUsersLoadStatus', 0)
          reject()
        })
      })
    },

    getUser: async (context, id) => {
      return new Promise((resolve, reject) => {
        API.get(`users/${id}`).then(res => {
          console.log('*[res]', res)
          if (res.status === 200) {
            context.commit('setUser', res.data.data)
            resolve()
          } else {
            context.commit('setUser', {})
            reject()
          }
        }).catch(() => {
          context.commit('setUser', {})
          reject()
        })
      })
    },

    resetUsersPagination: context => {
      context.commit('setUsersPagination', {
        page: 1,
        per_page: 5,
        total: 0,
        total_pages: 0
      })
    },

    setUsersPaginationPage: (context, page) => {
      context.commit('setUsersPagination', {
        page
      })
    },

    setUsersPaginationPerPage: (context, per_page) => {
      context.commit('setUsersPagination', {
        per_page,
        total_pages: Math.ceil(context.state.users.length / per_page)
      })
    }
  }
}
