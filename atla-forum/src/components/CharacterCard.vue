<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  emits: ["favourite"],
  methods: {
    addToFav() {
      this.$emit("favourite", this.character);
    },
  },
};
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="addToFav">⭐ Favorite</button>
  </div>
</template>
