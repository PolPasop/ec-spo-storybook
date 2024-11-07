import React from 'react';

import { Button } from '@fluentui/react-components';
import type { ButtonProps } from '@fluentui/react-components';

/** Primary UI component for user interaction */
export const SPOButton = (props: ButtonProps) => {
  return (
    <Button {...props} appearance='primary'>
      label
    </Button>
  );
};
