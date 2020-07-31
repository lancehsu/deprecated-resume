import React, { FC } from 'react';
import { GitHub } from '@material-ui/icons';
import { profile } from '../../../public/resumeContent';

const GithubLinkIcon: FC = () => (
  <a href={profile.github} target="_blank">
    <GitHub color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </a>
);

export default GithubLinkIcon;
