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
            <br v-if="msgs.length === 0" />
            <sent-msg v-if="msgs.length > 0"
                      v-for="(msg, i) in msgs"
                      :key="i"
                      :msg="msg">
            </sent-msg>
            <!-- 보낸 메시지 끝 -->

            <message-form @sendChat="sendChat"></message-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SentMsg from '@/components/SentMsg';
import MessageForm from '@/components/MessageForm';

export default {
  name: 'Chat',
  components: {
    MessageForm,
    SentMsg
  },
  data() {
    return {
      childMsg: '',
      message: ''
    }
  },
  computed: {
    ...mapState(['msgs'])
  },
  mounted() {},
  methods: {
    sendChat(msg) {}
  }
}
</script>

<style scoped>
body {
  height: 100%;
}
/*.user {*/
/*  border-bottom: 1px solid #716d6d;*/
/*  padding: 10px;*/
/*  width: 95%;*/
/*}*/
/*.user_data {*/
/*  background-color: #f8f9fa!important;*/
/*  border-top: 5px solid #716d6d;*/
/*  max-height: calc(100vh);*/
/*}*/
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
/*.incoming_msg_img {*/
/*  display: inline-block;*/
/*  width: 6%;*/
/*}*/
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
/*.mesgs {*/
/*  float: left;*/
/*  padding: 30px 15px 0 25px;*/
/*}*/

.sent_msg p {
  background: #040f8f none repeat scroll 0 0;
  border-radius: 6px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
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

/*.messaging {*/
/*  padding: 0 0 50px 0;*/
/*}*/
/*.msg_history {*/
/*  height: 516px;*/
/*  overflow-y: auto;*/
/*}*/
</style>