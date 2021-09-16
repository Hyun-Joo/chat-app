import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
      msgs: []
   },
   actions: {
      getSentMessages() {
         const eventSource = new EventSource('/sender/hyunjoo/receiver/joveticeight');
         eventSource.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data.createdAt);
            this.state.msgs.push(data.msg);
         }
      }
   }
});

export default store;