<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
};
</script>

<template>
  <div>
    <h1>Name: {{ this.user.name }}</h1>
    <p>Age: {{ this.user.age }}</p>
    <p>Email: {{ this.user.email }}</p>
    <p>Preferred framework: {{ this.user.preferredFramework }}</p>
    <button @click="$emit('change-name')">Change name</button>
  </div>
</template>
