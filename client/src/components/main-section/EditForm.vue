<template>
  <div style="margin:auto;text-align:center;">
    <form @submit.prevent="updateTask">
      <textarea name="title" id="title" placeholder="Title" v-model="data.title"></textarea>
      <br />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        v-model="data.description"
      ></textarea>
      <br />
      <button style="padding: 3px 10px;width:240px" class="btn btn-primary">Update</button>
    </form>
    <button
      style="padding: 3px 10px;width:240px;margin-top:5px;"
      class="btn btn-info"
      v-on:click="$emit('emitCancelEdit')"
    >Cancel</button>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  data() {
    return {};
  },
  methods: {
    updateTask: function() {
      let self = this;
      axios({
        method: "put",
        url: `http://localhost:3000/tasks/${this.data.id}`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          title: this.data.title,
          description: this.data.description
        }
      })
        .then(function(response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          self.$emit("emitEdit");
          self.$emit("emitClearEdit");
        })
        .catch(function(error) {
          Swal.fire({
            icon: "info",
            title: "Unauthorized",
            text: "You can not edit this data!",
            footer: "<a href>Why do I have this issue?</a>"
          });
          self.$emit("emitEdit");
          self.$emit("emitClearEdit");
          console.log(error.response);
        });
    }
  },
  props: ["data"]
};
</script>