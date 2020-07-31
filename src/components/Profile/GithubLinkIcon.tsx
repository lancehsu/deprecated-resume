import React, { FC } from 'react';
import { GitHub } from '@material-ui/icons';
import { profile } from '../../content/resumeContent';

const GithubLinkIcon: FC = () => (
  <a href={profile.github} target="_blank" rel="noopener noreferrer">
    <GitHub color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </a>
);

export default GithubLinkIcon;
