<template>
  <div>
    <div class="box-section">
      <div>
        <div class="card-section">
          <div class="category">
            <h3 style="text-align: center;padding: 5px;text-transform: capitalize;color: rgb(13, 84, 117);">category
            </h3>
          </div>
          <div style="height:400px; overflow:scroll;">
            <Task></Task>
            <Task></Task>
            <Task></Task>
          </div>
          <!-- <AddForm></AddForm> -->
          <!-- <EditForm></EditForm> -->
          <div class="add">
            Add Task
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
    } 
  }
</script>
