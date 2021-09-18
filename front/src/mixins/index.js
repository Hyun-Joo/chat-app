import moment from 'moment';

export default {
   methods: {
      getDtFormat: (date, gb) => {
         let timeText = '';
         switch (gb) {
            case 'hour':
               timeText = moment(date).format('HH:mm');
               break;
            default:
               timeText = moment(date).format('YYYY-MM-DD');
               break;
         }
         return timeText;
      }
   }
}