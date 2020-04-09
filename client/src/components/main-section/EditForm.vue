<template>
  <div>
    <form style="margin:5px auto;text-align: center;">
      <textarea name="title" id="title" placeholder="Title"></textarea>
      <br />
      <textarea name="description" id="description" placeholder="Description"></textarea>
      <br />
      <button style="padding: 3px 10px;" class="btn btn-primary">Update</button>
      <button style="padding: 3px 10px;" class="btn btn-info">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm"
};
</script>