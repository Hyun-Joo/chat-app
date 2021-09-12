<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div id="user_chat_data" class="user_chat_data">
          <div class="profile_name">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src="../assets/profile.png" class="mr-3 rounded-circle" alt="profile" />
            &nbsp;&nbsp; Hyunjoo Lee
          </div>
          <div id="chat-box" ref="chatBox" class="container-fluid chat_section">
            <!-- 받은 메시지 시작 -->
            <div class="incoming_msg">
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when
                    the real text is not </p>
                  <span class="time_date"> 11:18 | Today</span>
                </div>
              </div>
            </div>
            <!-- 받은 메시지 끝 -->

            <!-- 보낸 메시지 시작 -->
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when
                  the real text is not </p>
                <span class="time_date"> 11:18 | Today</span>
              </div>
            </div>
            <sent-msg v-for="(msg, i) in msgs" :key="i"></sent-msg>
            <!-- 보낸 메시지 끝 -->
          </div>

          <div class="type_msg">
            <div class="input_msg_write">
              <input type="text"
                     id="chat-outgoing-msg"
                     class="write_msg"
                     placeholder="Type a message"
                     @keydown="sendChat"
              />
              <button type="button" id="chat-outgoing-btn" class="msg_send_btn" @click="sendChat">
                <i class="fa fa-paper-plane" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SentMsg from '@/components/SentMsg';

export default {
  name: 'Chat',
  components: {
    SentMsg
  },
  data() {
    return {
      msgs: []
    }
  },
  mounted() {
  },
  methods: {
    sendChat(e) {
      if(e.keyCode === 13 || e.type === 'click') {
        this.msgs.push('msg');
      }
    }
  }
}
</script>

<style scoped>
body {
  height: 100%;
}
.user {
  border-bottom: 1px solid #716d6d;
  padding: 10px;
  width: 95%;
}
.user_data {
  background-color: #f8f9fa!important;
  border-top: 5px solid #716d6d;
  max-height: calc(100vh);
}
.user a:hover {
  text-decoration: none;
  color: #212529;
}
.user a {
  color: #212529;
}
.profile_name {
  background-color: #f8f9fa!important;
  width: 100%;
  padding: 10px;
  border-bottom: 5px solid #716d6d;
}

.chat_section {
  padding-top: 15px;
}
.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 6px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.received_withd_msg {
  width: 57%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 10px;
  margin: 8px 0 0;
}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
}

.sent_msg p {
  background: #040f8f none repeat scroll 0 0;
  border-radius: 6px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.sent_msg {
  float: right;
  width: 60%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
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
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>