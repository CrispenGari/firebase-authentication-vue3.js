<template>
  <div class="card">
    <span>{{ provider }}</span>
    <h1>{{ `${displayName ? displayName : email}` }}</h1>
    <div class="card__avatar">
      <img v-if="photoURL" :src="photoURL" alt="banner" />
      <h1 v-else>{{ String(email)[0].toUpperCase() }}</h1>
    </div>
    <div class="card__contact">
      <p>
        <span>Email</span><span>{{ `${email ? email : "No Email"}` }}</span>
      </p>
      <p>
        <span>Phone</span
        ><span>{{ `${phoneNumber ? phoneNumber : "No Phone Number"}` }}</span>
      </p>
    </div>
    <button type="button" @click="logout">Logout</button>
  </div>
</template>
<script>
import { auth } from "../../utils/firebase";
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    user: Object,
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
  computed: {
    displayName() {
      return this.user?.displayName;
    },
    email() {
      return this.user?.email;
    },
    phoneNumber() {
      return this.user?.phoneNumber;
    },
    provider() {
      return this.user?.providerData[0]?.providerId;
    },
    photoURL() {
      return this?.user?.photoURL;
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>
.card {
  background: var(--body-color);
  border-radius: 5px;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  user-select: none;
  user-zoom: none;
  position: relative;
}
.card__contact {
  margin: 10px auto;
  padding: 10px;
  width: 100%;
}
.card__contact > p {
  width: 100%;
  padding: 10px;
  background: white;
  border-bottom: 1px solid #ccc;
  margin: 2px auto;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__contact > p > span {
  color: white;
  padding: 5px 10px;
  height: fit-content;
  width: fit-content;
  font-size: 12px;
  font-weight: 600;
  background: green;
  border-radius: 999px;
  top: 20px;
  left: 20px;
}
.card__contact > p > span:last-child {
  cursor: pointer;
  background: lightseagreen;
}
.card > span {
  color: white;
  padding: 5px 10px;
  height: fit-content;
  width: fit-content;
  position: absolute;
  font-size: 12px;
  font-weight: 600;
  background: green;
  border-radius: 999px;
  top: 20px;
  left: 20px;
  cursor: pointer;
}
.card > h1 {
  font-size: 16px;
  margin: 15px;
  font-weight: 600;
  letter-spacing: 1px;
}
.card__avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  margin: 10px;
}
.card__avatar:hover {
  background: rgba(0, 0, 0, 0.4);
}
.card > button {
  width: 100px;
  background: black;
  color: white;
  padding: 5px 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
.card > button:hover {
  background: lightseagreen;
}
.card > button:active {
  background: orange;
}
</style>
