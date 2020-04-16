<template>
  <div class="content">
    <div class="content-header">
      <h3>Users</h3>
      <form v-on:submit.prevent>
        <input type="text" name="search" placeholder="Search by name" v-model="search"/>
      </form>
    </div>
    <div class="content-body">
      <ul v-if="filteredUsers.length">
        <li v-for="u in filteredUsers" :key="u.id">
          <router-link v-bind:to="{ name: 'User', params: { id: u.id }}">{{ u.first_name }} {{ u.last_name }}</router-link>
        </li>
      </ul>
      <div v-else class="search-empty">No users on page</div>
      <div v-if="loading">loading...</div>
      <hr/>
      <form class="pagination" v-on:submit.prevent>
        <a href="#" v-if="isPrevAvailable" @click.stop.prevent="onPrev()">Prev</a>
        <span v-else class="disabled">Prev</span>
        Users per page:
        <select name="per_page" v-model="perPage" @change="onChangePerPage()">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <a href="#" v-if="isNextAvailable" @click.stop.prevent="onNext()">Next</a>
        <span v-else class="disabled">Next</span>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data: () => {
    return {
      search: '',
      perPage: 5
    }
  },
  computed: {
    filteredUsers() {
      const iFrom = (this.pagination.page-1) * this.pagination.per_page
      const iTo = iFrom + this.pagination.per_page
      const users = this.users.slice(iFrom, iTo)
      const search = this.search.toLowerCase()
      return search !== '' ? users.filter(u => {
        let fullname = `${u.first_name} ${u.last_name}`
        fullname = fullname.toLowerCase()
        return fullname.indexOf(search) !== -1
      }) : users
    },
    isPrevAvailable() {
      return this.pagination.page > 1
    },
    isNextAvailable() {
      return this.pagination.page < this.pagination.total_pages
    },
    ...mapGetters({
      'users': 'users',
      'pagination': 'usersPagination',
      'loading': 'usersLoadStatus'
    })
  },
  methods: {
    onNext() {
      if (this.pagination.page < this.pagination.total_pages) {
        this.$store.dispatch('setUsersPaginationPage', this.pagination.page + 1)
      }
    },
    onPrev() {
      if (this.pagination.page > 1) {
        this.$store.dispatch('setUsersPaginationPage', this.pagination.page - 1)
      }
    },
    onChangePerPage() {
      this.$store.dispatch('setUsersPaginationPerPage', this.perPage)
    }
  },
  created () {
    this.$store.dispatch('resetUsersPagination')
    this.$store.dispatch('getUsers', 1).then(() => {
      console.log('*[init done]')
    })
  }
}
</script>

<style scoped>
input[name="search"] {
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 4px;
}
select[name="per_page"] {
  border: 1px solid #ccc;
  margin: 0 0 0 10px;
  text-align: center;
}
.search-empty {
  font-weight: bold
}
</style>
