import React, { FC } from 'react';
import { GitHub } from '@material-ui/icons';

const GithubLinkIcon: FC = () => (
  <a href="https://github.com/lancehsu" target="_blank">
    <GitHub color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </a>
);

export default GithubLinkIcon;
