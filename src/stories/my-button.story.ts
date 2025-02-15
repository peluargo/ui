import type { Meta, StoryObj } from '@storybook/vue3';
import { VBtn } from 'vuetify/components';

const meta = {
  title: 'Example/Button',
  component: VBtn,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof VBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
  },
};
