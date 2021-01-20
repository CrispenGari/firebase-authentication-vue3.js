<template>
  <div class="header">
    <h1>Home</h1>
    <h1>Authentication App</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: var(--header-color);
  z-index: 10;
  color: white;
  user-select: none;
  user-zoom: none;
  position: sticky;
  top: 0;
  border-bottom: 1px solid lightgray;
}
.header > h1 {
  cursor: pointer;

  font-size: 17px;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 10px 0;
  text-transform: uppercase;
}
</style>
