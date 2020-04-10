<template>
  <div>
    <nav>
      <div>
        <h2 style="margin:0;padding:0;letter-spacing:3px;">Kanban</h2>
      </div>
      <div style="display:flex;align-items:center;">
        <p style="margin:0;padding:0;">{{userLogged}}</p>
        <button
          v-on:click="logout"
          class="btn btn-info"
          style="margin:0 10px;padding:2px 10px;"
        >logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      userLogged: localStorage.getItem("user")
    };
  },
  methods: {
    logout: function() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      this.$emit("emitLogout");
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("User signed out.");
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged Out",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>