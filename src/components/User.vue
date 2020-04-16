<template>
  <div class="content">
    <div class="content-header">
      <h3>User </h3>
    </div>
    <div class="content-body">
      <div>First name: {{ firstName }}</div>
      <div>Last name: {{ lastName }}</div>
      <div>Email: {{ email }}</div>
      <div v-if="avatar">
        <img :src="avatar">
      </div>
    </div>
    <div class="breadcrumbs">
      <router-link v-bind:to="{ name: 'Home'}">Back to Users</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data: () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      avatar: ''
    }
  },
  created() {
    if (!this.$route.params.id) return
    this.$store.dispatch('getUser', this.$route.params.id).then(() => {
      const { user } = this.$store.getters
      this.firstName = user.first_name
      this.lastName = user.last_name
      this.email = user.email
      this.avatar = user.avatar
    })
  }
}
</script>

<style scoped>
</style>
