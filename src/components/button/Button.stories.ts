import Button from "@/components/button/Button.vue";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    emphasis: {
      control: { type: 'select', options: ['high', 'medium', 'ghost'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

const Template = (args: any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});
