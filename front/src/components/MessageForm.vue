<template>
  <div class="type_msg">
    <div class="input_msg_write">
      <input type="text"
             id="chat-outgoing-msg"
             class="write_msg"
             placeholder="Type a message"
             @keydown="sendChat"
             v-model="message.text"
      />
      <button type="button" id="chat-outgoing-btn" class="msg_send_btn" @click="sendChat">
        <i class="fa fa-paper-plane" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageForm",
  data() {
    return {
      message: {
        text: ''
      }
    }
  },
  methods: {
    sendChat(e) {
      if(e.keyCode === 13 || e.type === 'click') {
        let $input = document.querySelector('#chat-outgoing-msg');
        if($input.value.trim() === ''){
          $input.value = '';
          return false;
        }
        this.$emit('sendChat', this.message);
        $input.value = '';
      }
    }
  }
}
</script>

<style scoped>
.input_msg_write input {
  background: rgba(0,0,0,0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
  padding: 10px;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 8px;
  width: 33px;
  margin-right: 5px;
}
</style>