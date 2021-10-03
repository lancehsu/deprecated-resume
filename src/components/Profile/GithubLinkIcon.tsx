import React, { FC } from 'react';
import { Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { profile } from '../../content/resumeContent';

const GithubLinkIcon: FC = () => (
  <Link href={profile.github} target="_blank" rel="noopener noreferrer">
    <GitHub color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </Link>
);

export default GithubLinkIcon;
