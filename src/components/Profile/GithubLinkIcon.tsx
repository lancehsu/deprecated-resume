import React, { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { GitHub } from '@material-ui/icons';
import { profile } from '../../content/resumeContent';

const GithubLinkIcon: FC = () => (
  <OutboundLink href={profile.github} target="_blank" rel="noopener noreferrer">
    <GitHub color="primary" style={{ fontSize: '30', margin: '0.1em' }} />
  </OutboundLink>
);

export default GithubLinkIcon;
