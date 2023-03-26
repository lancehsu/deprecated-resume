import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import LinkedInLinkIcon from './LinkedInLInkIcon';
import GithubLinkIcon from './GithubLinkIcon';
import MailLink from './MailLink';
import { profile } from '../../content/resumeContent';

const Bios: FC = () => (
  <Box className="bios">
    <Typography variant="h3" style={{ marginBottom: '0.5em' }}>
      {profile.name}
    </Typography>
    <Typography variant="h6">{profile.summary}</Typography>
    {/* <Typography variant="h6">{profile.target}</Typography> */}
    <Box marginTop="1em" style={{ display: 'flex', flexFlow: 'column' }}>
      <Box>
        <LinkedInLinkIcon />
        <GithubLinkIcon />
      </Box>
      <MailLink />
    </Box>
  </Box>
);

export default Bios;
