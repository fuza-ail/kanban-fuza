<template>
  <div style="margin:auto;text-align:center;">
    <form>
      <textarea  name="title" id="title" placeholder="Title"></textarea>
      <br />
      <textarea  name="description" id="description" placeholder="Description"></textarea>
      <br />
      <button style="padding: 3px 10px;width:240px" class="btn btn-primary">Update</button>
    </form>
      <button style="padding: 3px 10px;width:240px;margin-top:5px;" class="btn btn-info">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  data(){
    return {
      
    }
  },
  method:{

  }
};
</script>