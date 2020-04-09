<template>
  <div>
    <div >
      <div class="task-section">
        <h3 style="text-transform: capitalize;font-size:1.2em;">{{task.title}}</h3>
        <p>{{task.description}}</p>
        <span>
          <i class="fas fa-edit edit-button" v-on:click="$emit('emitEdit')" ></i>
        </span>
        <span>
          <i class="fas fa-trash-alt delete-button" v-on:click="deleteTask"></i>
        </span>
      </div>
      <div v-if="editStatus">
        <EditForm></EditForm>
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from './EditForm'

export default {
  name: "Task",
  components:{
    EditForm
  },
  data(){
    return {
      editStatus : false
    }
  },
  props:["task"],
  methods:{
    deleteTask: function(){
      let self = this 
      axios({
        method:'delete',
        url:`http://localhost:3000/tasks/${this.task.id}`,
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(function(response){
        console.log(response)
        self.$emit('emitDelete')
      })
      .catch(function(error){
        console.log(error.response)
      })
    }
  }
};
</script>