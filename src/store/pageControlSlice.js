import { createSlice } from "@reduxjs/toolkit";
import myData from "../assets/data.json";

const pageControlSlice = createSlice({
  name: "control",
  initialState: {
    dataJSON: JSON.parse(myData),
    loginStatus: localStorage.getItem("login"),
    form: {
      userInfo: { name: "", login: "" },
      loginExist: false,
      passwords: { firstPassword: "", secoundPassword: "", match: true },
    },
    loginForm: {
      login: "",
      password: "",
      errorMessage: false,
    },
  },
  reducers: {
    logOut: (state) => {
      state.loginStatus = "false";
      localStorage.clear();
    },

    checkLoginForm: (state) => {
      let filtered = state.dataJSON.filter(
        (x) => x.login === state.loginForm.login
      );
      if (filtered.length > 0) {
        if (filtered[0].password === state.loginForm.password) {
          state.loginStatus = "true";
          localStorage.setItem("profile", filtered[0].name);

          localStorage.setItem("login", "true");
          state.loginForm.errorMessage = false;
        } else state.loginForm.errorMessage = true;
      } else state.loginForm.errorMessage = true;
    },
    setLoginForm: (state, action) => {
      if (action.payload.name === "login") {
        state.loginForm.login = action.payload.value;
      } else if (action.payload.name === "password") {
        state.loginForm.password = action.payload.value;
      } else if (action.payload.name === "status") {
        state.loginForm.errorMessage = !state.loginForm.errorMessage;
      }
    },
    setUserInfo: (state, action) => {
      if (action.payload.name === "name") {
        state.form.userInfo.name = action.payload.value;
      }
      if (action.payload.name === "login") {
        state.form.userInfo.login = action.payload.value;
      }
    },
    checkLogin: (state, action) => {
      if (state.dataJSON.some((x) => x.login === action.payload)) {
        state.form.loginExist = true;
      } else {
        state.form.loginExist = false;
      }
    },
    checkPasswords: (state, action) => {
      if (action.payload.name === "firstPassword") {
        if (action.payload.value === state.form.passwords.secoundPassword) {
          state.form.passwords.match = true;
        } else {
          state.form.passwords.match = false;
        }
        state.form.passwords.firstPassword = action.payload.value;
      } else if (action.payload.name === "secoundPassword") {
        if (action.payload.value === state.form.passwords.firstPassword) {
          state.form.passwords.match = true;
        } else {
          state.form.passwords.match = false;
        }
        state.form.passwords.secoundPassword = action.payload.value;
      }
    },
  },
});

export const {
  checkLogin,
  checkPasswords,
  setUserInfo,
  setLoginForm,
  checkLoginForm,
  logOut,
} = pageControlSlice.actions;
export default pageControlSlice.reducer;
