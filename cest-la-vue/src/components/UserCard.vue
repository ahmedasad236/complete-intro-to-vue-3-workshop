<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    userCompleteAddress() {
      return `${this.user.address.street}, ${this.user.address.suite}, ${this.user.address.city}`;
    },

    userCompany() {
      return `${this.user.company.name} - ${this.user.company.catchPhrase}`;
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card_row">
      <div class="card_row_item">
        <span>Name:</span>
        <span>{{ user.name }}</span>
      </div>
      <div class="card_row_item">
        <span>Username:</span>
        <span>{{ user.username }}</span>
      </div>
    </div>

    <div class="card_row">
      <div class="card_row_item">
        <span>Phone:</span>
        <span>{{ user.phone }}</span>
      </div>
      <div class="card_row_item">
        <span>Email:</span>
        <span>{{ user.email }}</span>
      </div>
    </div>

    <div class="card_row">
      <div class="card_row_item">
        <span>Website:</span>
        <span>{{ user.website }}</span>
      </div>
      <div class="card_row_item">
        <span>Company:</span>
        <span>{{ userCompany }}</span>
      </div>
    </div>

    <div class="card_row">
      <div class="card_row_item">
        <span>Address:</span>
        <span>{{ userCompleteAddress }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #eee;
}

.card_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

/* .card_row:not(:last-child) {
  border-bottom: 1px solid #111;
} */

.card_row_item {
  transition: all 0.3s;
  padding: 0.5rem;
}

.card_row_item:hover {
  background-color: #f9f9f9;
}

.card_row_item span:first-child {
  font-weight: bold;
}
</style>
