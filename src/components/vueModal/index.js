import Vue from 'vue';

export default Vue.extend({
  template: require('./index.html'),
  props: ['show', 'title', 'body'],
  methods: {
    close () {
      this.show = false;
    }
  }
});
