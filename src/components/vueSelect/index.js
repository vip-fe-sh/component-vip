import Vue from 'vue';

export default Vue.extend({
  template: require('./index.html'),
  props: ['options'],
  data () {
    return {
      isOpen: false,
      isValue: null,
      dropdownValue: this.options[0].value
    };
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen;
    },
    click (v) {
      this.dropdownValue = v;
      console.log(v);
      this.isOpen = false;
    }
  }
});
