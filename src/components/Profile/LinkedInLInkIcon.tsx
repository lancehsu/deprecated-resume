import React, { FC } from 'react';
import { LinkedIn } from '@material-ui/icons';
import { profile } from '../../../public/resumeContent';

const LinkedInLinkIcon: FC = () => (
  <a href={profile.linkedIn} target="_blank">
    <LinkedIn color="primary" style={{ fontSize: '30', margin: '0.1em' }}></LinkedIn>
  </a>
);

export default LinkedInLinkIcon;
