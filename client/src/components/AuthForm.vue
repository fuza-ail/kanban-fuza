<template>
  <div class="container">
    <h1 style="text-align:center;margin:40px auto;letter-spacing:5px;">KANBAN</h1>
    <div :class="className">
      <div class="toggle">
        <h2 style="text-align:center;margin-bottom:20px;">{{ type }}</h2>
        <div v-if="type == 'login'">
          <a v-on:click="toggle">register</a>
        </div>
        <div v-else>
          <a v-on:click="toggle">login</a>
        </div>
      </div>
      <form @submit.prevent="submit" method="post">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" placeholder="Email Address" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </div>
        <button
          type="submit"
          class="btn btn-info"
          style="text-transform:capitalize;margin:20px auto"
        >{{ type }}</button>
        <br />
      </form>
      <!-- google -->
      <GoogleLogin @emitGoogle="$emit('emitGoogle')"></GoogleLogin>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "./main-section/GoogleLogin";

export default {
  name: "AuthForm",
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: "",
      password: "",
      className: "register-section"
    };
  },
  props: ["type"],
  methods: {
    toggle: function() {
      this.$emit("emitToggle");
      this.className = this.type + "-section";
    },
    submit: function() {
      if (this.type == "login") {
        let self = this;
        axios({
          method: "post",
          url: "https://nameless-anchorage-50999.herokuapp.com/login",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(function(response) {
            // console.log(response);
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("user", response.data.email);
            self.$emit("emitAfterAction", response.data.access_token);
          })
          .catch(function(error) {
            Swal.fire({
              icon: "icon",
              title: "Oops...",
              text: `${error.response.data.message}`,
              footer: "<a href>Why do I have this issue?</a>"
            });
          });
      } else {
        let self = this;
        axios({
          method: "post",
          url: "https://nameless-anchorage-50999.herokuapp.com/register",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(function(response) {
            // console.log(response);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account created",
              showConfirmButton: false,
              timer: 1500
            });
            self.$emit("emitAfterAction");
          })
          .catch(function(error) {
            Swal.fire({
              icon: "icon",
              title: "Oops...",
              text: `${error.response.data.message}`,
              footer: "<a href>Why do I have this issue?</a>"
            });
          });
      }
      this.email = "";
      this.password = "";
    }
  }
};
</script>