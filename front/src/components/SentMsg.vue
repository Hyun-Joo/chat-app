<template>
  <div class="outgoing_msg">
    <div class="sent_msg">
      <p>{{inputMsg.msg}}</p>
      <span class="time_date"> {{inputMsg.createdAt}} | {{dayText}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: "SentMsg",
  props: {
    msg: {
      type: Object,
      default: {
        text: '',
        time: ''
      }
    }
  },
  data() {
    return {
      inputMsg: {
        msg: '',
        createdAt: ''
      },
      dayText: ''
    }
  },
  mounted() {
    this.inputMsg.msg += this.msg.text;
    this.inputMsg.createdAt += this.getDtFormat(this.msg.time, 'hour');

    this.getDayText();
  },
  methods: {
    getDayText() {
      if(moment().diff(moment(this.msg.time), 'days') === 0) {
        this.dayText = 'Today';
      } else if(moment().diff(moment(this.msg.time), 'days') === 1) {
        this.dayText = '1 day ago'
      } else {
        this.dayText = moment(this.msg.time).format('MM-DD');
      }
    }
  }
}
</script>

<style scoped>
.time_date {
  color: #747474;
  display: block;
  font-size: 10px;
  margin: 8px 0 0;
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
</style>