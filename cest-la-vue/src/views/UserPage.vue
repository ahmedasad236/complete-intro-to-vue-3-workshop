<script setup>
import UserCard from "../components/UserCard.vue";
import { defineProps } from "vue";
import { userList } from "../composables/useUserStore";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

defineEmits(["update-user-list"]);

async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
}

userList.value = await fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <router-link
        v-for="user in userList"
        :key="`user-${user.id}`"
        :to="`/user-detailed/${user.name}`"
      >
        <UserCard :user="user" />
      </router-link>
    </ul>
  </main>
</template>

<style></style>
