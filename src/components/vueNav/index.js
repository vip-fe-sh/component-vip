import Vue from 'vue';

export default Vue.extend({
  template: require('./index.html'),
  props: ['navs'],
  data () {
    return {
      cur: 0
    };
  }
});
