<template>
  <div class="main-section">
    <Navigation></Navigation>
    <div class="box-section">
      <Card v-for="(val,key) in categories" :key="val.id" :category="key" :value="val" @emitAdd="$emit('emitAdd')" @emitDelete="$emit('emitDelete')"></Card>

    </div>
  </div>
</template>

<script>
  import Navigation from "./main-section/Navigation"
  import Card from "./main-section/Card"

  export default {
    name:'MainPage',
    data(){
      return{
        categories: {
          backlog:[],
          doing:[],
          review:[],
          completed:[]
        }
      }
    },
    components: {
      Navigation,
      Card
    },
    props:["data"],
    watch: {data:function(newVal,oldVal){
      console.log(newVal);
      console.log(oldVal);
      this.passData()
    }},
    methods:{
      passData: function(){
        this.categories = {
          backlog:[],
          doing:[],
          review:[],
          completed:[]
        }
        this.data.forEach(el=>{

          for(let key in this.categories){
            if(el.category == key){
              this.categories[key].push({
                id: el.id,
                title: el.title,
                description: el.description
              })
            }
          }
        })
      }
    } 
  }
</script>