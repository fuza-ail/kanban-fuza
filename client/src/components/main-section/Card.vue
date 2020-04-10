<template>
  <div>
    <div class="box-section">
      <div>
        <div class="card-section">
          <div class="category">
            <h3 style="text-align: center;padding: 5px;text-transform: capitalize;color: rgb(13, 84, 117);">{{category}}
            </h3>
          </div>
          <div style="height:400px; overflow:scroll;">
            <Task v-for="item in value" :key="item.id" :task="item" @emitDelete="$emit('emitDelete')" @emitEdit="editToggle"></Task>
          </div>
          <div v-if="addStatus">
            <AddForm @emitCancel="cancelToggle" @emitAdd="$emit('emitAdd')" :cat="category"></AddForm>
          </div>
          <div v-if="editStatus">
            <EditForm :data="dataEdit" @emitEdit="$emit('emitEdit')" @emitClearEdit="cancelEdit" @emitCancelEdit="cancelEdit"></EditForm>
          </div>
          <div v-if="!addStatus">
            <div class="add" v-on:click="addToggle">
              Add Task
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
  import Task from './Task'
  import AddForm from './AddForm'
  import EditForm from './EditForm'
  

  export default {
    name: 'Card',
    components: {
      Task,
      AddForm,
      EditForm
    },
    props:['category','value'],
    data(){
      return{
        addStatus: false,
        editStatus: false,
        dataEdit:null
      }
    },
    methods:{
      addToggle: function(){
        this.addStatus = true;
      },
      cancelToggle: function(){
        this.addStatus = false;
      },
      editToggle: function(data){
        this.editStatus= true;
        this.dataEdit = data
      },
      cancelEdit:function(){
        this.editStatus = false
      }
    }
  }
</script>
