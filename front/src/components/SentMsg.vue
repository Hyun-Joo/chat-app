<template>
  <div class="outgoing_msg">
    <div class="sent_msg">
      <p>{{inputMsg}}</p>
      <span class="time_date"> 11:18 | Today</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SentMsg",
  props: {
    msg: String
  },
  data() {
    return {
      inputMsg: ''
    }
  },
  mounted() {
    this.inputMsg += this.msg;
  },
  methods: {
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