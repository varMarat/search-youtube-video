import Vue from 'vue'
import Vuex from 'vuex'
import users from '../data/users.json'
import youtube from '../api/youtube'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag: false,
  },
  getters:{

  },
  mutations: {
    flag(state, booleanType){
      state.flag = booleanType
    },
    login(state, data){
      users.forEach((item) => 
      {
        if(item.login === data.login){
          if(item.password === data.password){
            const rand = function() {
              return Math.random().toString(36).substr(2);
            };          
            const generateToken = function() {
              return rand() + rand(); 
            };
          
            localStorage.token = generateToken();
            state.flag = true;
          }
        }
      })
    },
    logout(state){
      localStorage.removeItem('token');
      state.flag = false;
    }
  },
  actions: {
    getVideosFromApi(store, text){
     return youtube.get('/search', {
        params: {
          q: text
      }
      })
    }
  },
  modules: {
  }
})
