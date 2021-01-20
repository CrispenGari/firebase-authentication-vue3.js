<template>
  <div class="authentication" v-if="hasAccount">
    <Login @accountNotAvailable="handleAccountAvailable" />
  </div>
  <div class="authentication" v-else>
    <SignIn @accountAvailable="handleAccountAvailable" />
  </div>
</template>

<script>
import { Login, SignIn } from "../../components";
export default {
  name: "Authentication",
  components: {
    Login,
    SignIn,
  },
  data() {
    return {
      hasAccount: true,
    };
  },
  methods: {
    handleAccountAvailable(value) {
      this.hasAccount = Boolean(value);
    },
  },
};
</script>

<style scoped>
.authentication {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 10px;
}
</style>
