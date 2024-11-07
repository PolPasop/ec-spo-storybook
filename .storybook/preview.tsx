import React from 'react';
import type { Preview } from "@storybook/react";
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={webLightTheme} >
        <Story />
      </FluentProvider>
    ),
  ],
};

export default preview;

