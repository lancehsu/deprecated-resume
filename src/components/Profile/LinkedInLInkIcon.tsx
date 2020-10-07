import React, { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { LinkedIn } from '@material-ui/icons';
import { profile } from '../../content/resumeContent';

const LinkedInLinkIcon: FC = () => (
  <OutboundLink href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
    <LinkedIn color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </OutboundLink>
);

export default LinkedInLinkIcon;
