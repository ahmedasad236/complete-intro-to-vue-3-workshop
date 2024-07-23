<script>
import UserCard from "./UserCard.vue";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = await response.json();
    },
  },
  async created() {
    this.fetchUsers();
    console.log("aaaaaaaaaaah");
  },
};
</script>

<template>
  <div class="container">
    <h1>Users</h1>
    <div class="users">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

.users {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(fit-content, 1fr));
  gap: 1rem;
}
</style>
