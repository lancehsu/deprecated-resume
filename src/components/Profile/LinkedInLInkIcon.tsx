import React, { FC } from 'react';
import { LinkedIn } from '@material-ui/icons';
import { profile } from '../../../static/content/resumeContent';

const LinkedInLinkIcon: FC = () => (
  <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
    <LinkedIn color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </a>
);

export default LinkedInLinkIcon;
