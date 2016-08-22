import Vue from 'vue';
import './index.scss';
import vueSelect from '../vueSelect/';
import vueModal from '../vueModal/';
import vueNav from '../vueNav/';
import {initSpinner} from '../../utils/utils.js';

export default Vue.extend({
  template: require('./index.html'),
  components: {
    'vue-select': vueSelect,
    'vue-modal': vueModal,
    'vue-nav': vueNav
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
      ],
      modal: {
        myShow: false,
        title: '',
        myBody: '<div>this is my body</div>'
      },
      navs: [
        {
          id: 1,
          value: '选项一'
        },
        {
          id: 2,
          value: '选项二'
        },
        {
          id: 3,
          value: '选项三'
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
  },
  methods: {
    myClick (v) {
      this.modal.myShow = v;
      this.modal.title = 'vip-modal';
    }
  },
  watch: {
    'modal.myShow': (cdata) => {
      console.log(cdata);
    }
  }
});
