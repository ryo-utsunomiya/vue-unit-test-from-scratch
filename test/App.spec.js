import Vue from 'vue';
import App from '../src/App.vue';
import assert from 'assert';

Vue.config.productionTip = false;

describe('App', () => {
  it('default data', () => {
    assert.equal('function', typeof App.data);
    const defaultData = App.data();
    assert.equal(defaultData.message, 'Hello Vue!');
  });

  it('mount component', () => {
    const vm = new Vue(App).$mount();
    assert.equal('Hello Vue!', vm.message);
  });

  it('renders the correct message', () => {
    const Ctor = Vue.extend(App);
    const vm = new Ctor().$mount();
    assert.equal('Hello Vue!', vm.$el.textContent);
  });
});
