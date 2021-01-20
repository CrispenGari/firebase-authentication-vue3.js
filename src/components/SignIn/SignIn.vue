<template>
  <div class="signIn">
    <h1>Create Account</h1>
    <form class="signIn__form" @submit.prevent="handleSignIn">
      <input v-model.lazy="email" type="text" placeholder="Username or Email" />
      <input type="password" placeholder="Password" v-model.lazy="password" />
      <input
        type="password"
        placeholder="Confirm Password"
        v-model.lazy="confirmPassword"
      />

      <p v-show="error">{{ error }}</p>
      <div class="signIn__form__buttons">
        <div class=""></div>
        <button type="submit" :disabled="!email && !password">Create</button>
        <span @click="handleAccountAvailable">Login</span>
      </div>
    </form>
    <div class="signIn__providers">
      <h1>Or</h1>
      <div class="signIn__providers__buttons">
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
  name: "SignIn",
  data() {
    return {
      error: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSignIn() {
      if (this.password === this.confirmPassword) {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((authUser) => {
            console.log(authUser);
            this.password = "";
            this.confirmPassword = "";
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
            this.email = "";
          })
          .catch((error) => {
            this.error = error?.message;
          });
      } else {
        this.error = "The two password doen't matches";
        this.password = "";
        this.confirmPassword = "";
      }
    },
    handleAccountAvailable() {
      this.$emit("accountAvailable", !false);
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
          this.confirmPassword = "";
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
          this.confirmPassword = "";
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
          this.confirmPassword = "";
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
          this.confirmPassword = "";
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
          this.confirmPassword = "";
          this.email = "";
        })
        .catch((error) => {
          this.error = error?.message;
        });
    },
  },
};
</script>

<style scopped>
.signIn {
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
.signIn > h1,
.signIn__providers > h1 {
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 10px 0;
  text-transform: uppercase;
}
.signIn__providers > h1 {
  color: lightseagreen;
}
.signIn__form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.signIn__form > input {
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
.signIn__providers__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.signIn__providers__buttons > button,
.signIn__form__buttons > button {
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
.signIn__providers__buttons > button:hover,
.signIn__form__buttons > button:hover {
  background: lightseagreen;
}
.signIn__providers__buttons > button:active,
.signIn__form__buttons > button:active {
  background: orange;
}
.signIn__form__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.signIn__form__buttons > span {
  color: lightseagreen;
  cursor: pointer;
  font-size: 15px;
}
.signIn__form__buttons > span:hover {
  cursor: pointer;
  text-decoration: underline;
}
.signIn__form > p {
  color: red;
  font-style: italic;
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding: 5px;
}
</style>
