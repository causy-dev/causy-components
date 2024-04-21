import Header from "@/components/header/Header.vue";

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {

  },
};

const Template = (args: any) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args">Header</Header>',
});
