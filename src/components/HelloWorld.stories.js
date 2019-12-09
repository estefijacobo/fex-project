import Vue from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

// export default { title: 'Button' };
//
// export const withText = () => '<my-button>with text</my-button>';
//
// export const withEmoji = () => '<my-button>😀 😎 👍 💯</my-button>';

export const asAComponent = () => ({
  components: { HelloWorld },
  template: '<hello-world></hello-world>'
});
