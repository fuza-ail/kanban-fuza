<template>
  <div>
    <div v-if="token">
      <MainPage></MainPage>
    </div>
    <div v-else>
      <div v-if="authStatus">
        <AuthForm :type="'register'" @emitToggle="goToggle" ></AuthForm>
      </div>
      <div v-else>
        <AuthForm :type="'login'" @emitToggle="goToggle" @emitToken="token = $event"></AuthForm>
      </div>
    </div>
  </div>
</template>

<script>
  import AuthForm from "./components/AuthForm";
  import MainPage from "./components/MainPage";

  export default {
    name: "App",
    components: {
      AuthForm,
      MainPage
    },
    created() {
      this.getData();
    },
    data() {
      return {
        authStatus: false,
        token: localStorage.getItem("access_token")
      };
    },
    methods: {
      goToggle() {
        if (this.authStatus) {
          this.authStatus = false;
        } else {
          this.authStatus = true;
        }
      },
      getData() {
        axios({
          method: "get",
          url: "http://localhost:3000/tasks",
          headers: {
            access_token: this.token
          }
        })
          .then(function(response) {
            console.log(response.data);
          })
          .catch(function(error) {
            console.log(error.response);
          });
      }
    }
  };
</script>
