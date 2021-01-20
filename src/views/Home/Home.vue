<template>
  <div class="home">
    <Card :user="user" />
  </div>
</template>

<script>
import { Card } from "../../components";
export default {
  name: "Home",
  components: {
    Card,
  },
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  display: grid;
  place-items: center;
  background-color: white;
  max-width: 500px;
  margin: 20px auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  flex: 1;
  padding: 10px;
}
</style>
