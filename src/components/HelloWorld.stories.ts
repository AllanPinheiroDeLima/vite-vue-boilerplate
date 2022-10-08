import type {Meta, Story} from "@storybook/vue3";
import HelloWorld from "./HelloWorld.vue";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld
} as Meta<typeof HelloWorld>;

const Template: Story<{
  msg: string
}> = (args) => ({
  components: { HelloWorld },
  setup () {
    return { args };
  },
  template: "<HelloWorld v-bind='args'/>"
})

export const Primary = Template.bind({});

Primary.args = {
  msg: "Mensagem do template"
}
