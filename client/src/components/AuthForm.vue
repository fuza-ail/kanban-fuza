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
        <button type="submit" class="btn btn-info" style="text-transform:capitalize;">{{ type }}</button>
        <br />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
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
          url: "http://localhost:3000/login",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(function(response) {
            localStorage.setItem("access_token",response.data.access_token)
            console.log(response)
            self.$emit("emitToken",response.data.access_token)
          })
          .catch(function(error) {
            console.log(error.response.data);
          });
      } else {
        axios({
          method: "post",
          url: "http://localhost:3000/register",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(function(response) {
            console.log(response)
          })
          .catch(function(error) {
            console.log(error.response.data);
          });
      }
      this.email = "";
      this.password = "";
    }
  }
};
</script>