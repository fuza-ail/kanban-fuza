<template>
  <div style="margin:auto;text-align:center;">
    <form @submit.prevent="deleteTask">
      <textarea v-model="title" name="title" id="title" placeholder="Title"></textarea>
      <br />
      <textarea v-model="description" name="description" id="description" placeholder="Description"></textarea>
      <br />
      <button style="padding: 3px 10px;width:240px" class="btn btn-primary">Create</button>
    </form>
    <button
      style="padding: 3px 10px;width:240px;margin-top:5px;"
      class="btn btn-info"
      v-on:click="cancelAdd"
    >Cancel</button>
  </div>
</template>

<script>
export default {
  name: "AddFrom",
  data() {
    return {
      title: null,
      description: null
    };
  },
  props: ["cat"],
  methods: {
    cancelAdd: function() {
      this.$emit("emitCancel");
    },
    deleteTask: function() {
      let self = this;
      // console.log(this.cat)
      axios({
        method: "post",
        url: `https://nameless-anchorage-50999.herokuapp.com/tasks`,
        data: {
          title: this.title,
          description: this.description,
          category: this.cat
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(function(response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task has been created",
            showConfirmButton: false,
            timer: 1500
          });
          console.log(response);
          self.$emit("emitAdd");
          self.$emit("emitToggleAdd");
        })
        .catch(function(error) {
          console.log(error.response);
        });
      this.title = "";
      this.description = "";
    }
  }
};
</script>