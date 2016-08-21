import Vue from 'vue';
import vueSelect from '../vueSelect/';
import {initSpinner} from '../../utils/utils.js';

export default Vue.extend({
  template: require('./index.html'),
  components: {
    'vue-select': vueSelect
  },
  data () {
    return {
      options: [
        {
          id: 1,
          value: '女装'
        },
        {
          id: 2,
          value: '男装'
        },
        {
          id: 3,
          value: '鞋包'
        }
      ]
    };
  },
  ready () {
    let target = document.getElementById('spin');
    initSpinner(target);

    this.$http.get('/mock/mock.json').then((response) => {
      if (response.ok) {
        target.className += ' hidden';
      } else {
        window.alert(response.statusText);
      }
    }, (err) => {
      window.alert(err);
    });
  }
});
