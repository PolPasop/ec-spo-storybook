import type { Meta, StoryObj } from '@storybook/react';

import { DepartmentView } from './DepartmentView';

const meta = {
  title: 'Example/DepartmentView',
  component: DepartmentView,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DepartmentView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    layout: 'list',
    limit: 3,
  },
};

export const SideBySide: Story = {
  args: {
    layout: 'sidebyside',
    limit: 3,
  },
};

export const Grid: Story = {
  args: {
    layout: 'grid',
    limit: 3,
  },
};


