<template>
  <div>
    <div v-if="token" >
      <MainPage
        :data="categories"
        @emitAdd="checkData"
        @emitDelete="checkData"
        @emitEdit="checkData"
        @emitLogout="checkData"
      ></MainPage>
    </div>
    <div v-else>
      <div v-if="authStatus">
        <AuthForm
          :type="'register'"
          @emitToggle="goToggle"
          @emitAfterAction="goToggle"
          @emitGoogle="checkData"
        ></AuthForm>
      </div>
      <div v-else>
        <AuthForm
          :type="'login'"
          @emitToggle="goToggle"
          @emitAfterAction="checkData"
          @emitGoogle="checkData"
        ></AuthForm>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from "./components/AuthForm";
import MainPage from "./components/MainPage";

export default {
  name: "App",
  components: {
    AuthForm,
    MainPage
  },
  created() {
    this.checkToken();
    // this.getData();
  },
  
  data() {
    return {
      authStatus: false,
      token: null,
      dataTask: [],
      categories: {
          backlog:[],
          doing:[],
          review:[],
          completed:[]
        }
    };
  },
  watch: {
    token: function(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      this.getData();
    }
  },
  methods: {
    checkToken(){
      if(localStorage.getItem('access_token')){
        this.token = localStorage.getItem("access_token")
      }
    },
    goToggle() {
      if (this.authStatus) {
        this.authStatus = false;
      } else {
        this.authStatus = true;
      }
    },
    getData() {
      // let self = this;
      console.log('masuk get')
      axios({
        method: "get",
        url: "https://nameless-anchorage-50999.herokuapp.com/tasks",
        headers: {
          access_token: this.token
        }
      })
        .then(response => {
          this.dataTask = response.data;
          console.log(response);
          this.passData();
        })
        .catch(error => {
          console.log(error.response);
        });
        console.log('akhir get')
    },
    checkData(token) {
      this.token = localStorage.getItem('access_token');
      this.getData();
    },
    passData: function(){
        console.log('masuk pass data')
        this.categories = {
          backlog:[],
          doing:[],
          review:[],
          completed:[]
        }
        this.dataTask.forEach(el=>{

          for(let key in this.categories){
            if(el.category == key){
              this.categories[key].push({
                id: el.id,
                title: el.title,
                description: el.description,
                email:el.User.email
              })
            }
          }
        })
        console.log('akhir pass data')
      }
  }
};
</script>
