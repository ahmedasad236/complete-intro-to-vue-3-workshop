<script>
export default {
  name: "BaseLayout",
};
</script>

<template>
  <div class="container">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #f0f0f0;
  padding: 1rem;
}

main {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

footer {
  background-color: #f0f0f0;
  padding: 1rem;
}
</style>
