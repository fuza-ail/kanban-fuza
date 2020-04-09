<template>
  <div class="main-section">
    <Navigation></Navigation>
    <div class="box-section">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
  import Navigation from "./main-section/Navigation"
  import Card from "./main-section/Card"

  export default {
    name:'MainPage',
    components: {
      Navigation,
      Card
    } 
  }
</script>