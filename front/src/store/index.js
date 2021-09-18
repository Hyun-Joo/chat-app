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
            const createdAt = data.createdAt ?? '2021-09-01';
            this.state.msgs.push({text: data.msg, time: createdAt});
         }
      }
   }
});

export default store;