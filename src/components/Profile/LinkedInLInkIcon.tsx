import React, { FC } from 'react';
import { Link } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';
import { profile } from '../../content/resumeContent';

const LinkedInLinkIcon: FC = () => (
  <Link href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
    <LinkedIn color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </Link>
);

export default LinkedInLinkIcon;
