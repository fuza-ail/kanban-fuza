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
            <Task v-for="item in value" :key="item.id" :task="item" @emitDelete="$emit('emitDelete')"></Task>
          </div>
          <div v-if="addStatus">
            <AddForm @emitCancel="cancelToggle" @emitAdd="$emit('emitAdd')" :cat="category"></AddForm>
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
  

  export default {
    name: 'Card',
    components: {
      Task,
      AddForm
    },
    props:['category','value'],
    data(){
      return{
        addStatus: false
      }
    },
    methods:{
      addToggle: function(){
        this.addStatus = true;
      },
      cancelToggle: function(){
        this.addStatus = false;
      }
    }
  }
</script>
