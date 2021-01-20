<template>
  <div class="app">
    <div class="app__main" v-if="!user">
      <Authentication />
    </div>
    <div class="app__main" v-else>
      <Header />
      <Home :user="user" />
    </div>
  </div>
</template>

<script>
import { Home, Authentication } from "./views";
import { Header } from "./components";
import { auth } from "./utils/firebase";
export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  components: {
    Home,
    Authentication,
    Header,
  },
  mounted() {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user = authUser;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
.app__main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
