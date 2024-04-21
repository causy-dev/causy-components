import Spinner from "@/components/spinner/Spinner.vue";

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
  },
};

const Template = (args: any) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args">Spinner</Spinner>',
});
