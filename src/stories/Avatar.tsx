import * as React from 'react';
import { Avatar } from '@fluentui/react-components';
import type { AvatarProps } from '@fluentui/react-components';

export const Default = (props: Partial<AvatarProps>) => (
  <Avatar aria-label="Guest" {...props} />
);

export { Avatar };

