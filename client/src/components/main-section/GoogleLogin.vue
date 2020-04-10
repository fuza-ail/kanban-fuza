<template>
  <button class="btn btn-danger" v-on:click="onSignin">Google</button>
</template>

<script>
export default {
  name: "GoogleLogin",
  mounted() {

  },
  methods: {
    onSignin() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          let self = this;
          axios({
            method: "post",
            url: "https://nameless-anchorage-50999.herokuapp.com/loginGoogle",
            data: {
              token: GoogleUser.getAuthResponse().id_token
            }
          })
            .then(function(response) {
              localStorage.setItem("access_token", response.data.access_token);
              localStorage.setItem("user",response.data.email)
              self.$emit("emitGoogle");
            })
            .catch(function(error) {
              console.log(error.response);
            });
        })
        .catch(error => {
          //on fail do something
          console.log(error);
        });
    }
  }
};
</script>