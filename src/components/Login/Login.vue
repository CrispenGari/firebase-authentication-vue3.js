<template>
  <div class="login">
    <h1>Login</h1>
    <form class="login__form" @submit.prevent="handleLogin">
      <input v-model.lazy="email" type="text" placeholder="Username or Email" />
      <input
        :type="`${usePasswordChar ? 'password' : 'text'}`"
        placeholder="Password"
        v-model.lazy="password"
      />
      <label for="login__show__password">
        {{ `${usePasswordChar ? "Show Password" : "Hide Password"}` }}
        <input
          @change="handleCheckBoxChange"
          type="checkbox"
          :id="`login__show__password`"
        />
      </label>
      <p v-show="error">{{ error }}</p>
      <div class="login__form__buttons">
        <div class=""></div>
        <button type="submit" :disabled="!email && !password">Login</button>
        <span @click="handleAccountNotAvailable">Sign up</span>
      </div>
    </form>
    <div class="login__providers">
      <h1>Or</h1>
      <div class="login__providers__buttons">
        <button type="button" @click="facebookAuth">Facebook</button>
        <button type="button" @click="twitterAuth">Twitter</button>
        <button type="button" @click="googleAuth">Google</button>
        <button type="button" @click="githubAuth">GitHub</button>
        <button type="button" @click="yahooAuth">Yahoo</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  auth,
  googleProvider,
  gitHubProvider,
  yahooProvider,
  twitterProvider,
  facebookProvider,
} from "../../utils/firebase";
export default {
  name: "Login",
  data() {
    return {
      usePasswordChar: true,
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
    handleAccountNotAvailable() {
      this.$emit("accountNotAvailable", false);
    },
    handleCheckBoxChange(e) {
      this.usePasswordChar = !e.target.checked;
    },
    googleAuth() {
      auth
        .signInWithPopup(googleProvider)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
    facebookAuth() {
      auth
        .signInWithPopup(facebookProvider)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
    yahooAuth() {
      auth
        .signInWithPopup(yahooProvider)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
    githubAuth() {
      auth
        .signInWithPopup(gitHubProvider)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
    twitterAuth() {
      auth
        .signInWithPopup(twitterProvider)
        .then((authUser) => {
          console.log(authUser);
          this.password = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
  },
};
</script>

<style scoped>
.login {
  background: white;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-bottom: 1px solid lightgray;
  margin: 10px auto;
  user-select: none;
  user-zoom: none;
}
.login > h1,
.login__providers > h1 {
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 10px 0;
  text-transform: uppercase;
}
.login__providers > h1 {
  color: lightseagreen;
}
.login__form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.login__form > input {
  width: 90%;
  padding: 5px;
  outline: none;
  border: none;
  background: var(--body-color);
  border-radius: 5px;
  margin: 10px auto;
  font-size: 16px;
}
label {
  font-size: 15px;
  width: 90%;
  margin: 10px auto;
  cursor: pointer;
}
label > input {
  margin-left: 5px;
}
.login__providers__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.login__providers__buttons > button,
.login__form__buttons > button {
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
.login__providers__buttons > button:hover,
.login__form__buttons > button:hover {
  background: lightseagreen;
}
.login__providers__buttons > button:active,
.login__form__buttons > button:active {
  background: orange;
}
.login__form__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.login__form__buttons > span {
  color: lightseagreen;
  cursor: pointer;
  font-size: 15px;
}
.login__form__buttons > span:hover {
  cursor: pointer;
  text-decoration: underline;
}
.login__form > p {
  color: red;
  font-style: italic;
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding: 5px;
}
</style>
