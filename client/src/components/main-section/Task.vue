<template>
  <div>
    <div>
      <div class="task-section">
        <h3 style="text-transform: capitalize;font-size:1.2em;">{{task.title}}</h3>
        <p>{{task.description}}</p>
        <p style="color:rgb(85, 85, 85);font-size:0.7em">{{task.email}}</p>
        <span>
          <i class="fas fa-edit edit-button" v-on:click="$emit('emitEdit',task)"></i>
        </span>
        <span>
          <i class="fas fa-trash-alt delete-button" v-on:click="deleteTask"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    deleteTask: function() {
      let self = this;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          axios({
            method: "delete",
            url: `https://nameless-anchorage-50999.herokuapp.com/tasks/${this.task.id}`,
            headers: {
              access_token: localStorage.getItem("access_token")
            }
          })
            .then(function(response) {
              self.$emit("emitDelete");
            })
            .catch(function(error) {
              Swal.fire({
                icon: "info",
                title: "Unauthorized",
                text: "You can not delete this data!",
                footer: "<a href>Why do I have this issue?</a>"
              });
              console.log(error.response);
            });
        }
      });
    }
  }
};
</script>