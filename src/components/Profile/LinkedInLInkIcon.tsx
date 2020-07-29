import React, { FC } from 'react';
import { LinkedIn } from '@material-ui/icons';

const LinkedInLinkIcon: FC = () => (
  <a href="https://www.linkedin.com/in/klhsu/" target="_blank">
    <LinkedIn color="primary" style={{ fontSize: '30', margin: '0.1em' }}></LinkedIn>
  </a>
);

export default LinkedInLinkIcon;
