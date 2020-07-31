import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import LinkedInLinkIcon from './LinkedInLInkIcon';
import GithubLinkIcon from './GithubLinkIcon';
import MailLink from './MailLink';
import { profile } from '../../content/resumeContent';

const Bios: FC = () => {
  return (
    <Box className="bios" style={{ width: '60em', margin: '1em' }}>
      <Typography variant="h2">{profile.name}</Typography>
      <Box style={{ margin: '0.5em' }}>
        <LinkedInLinkIcon />
        <GithubLinkIcon />
      </Box>
      <Typography variant="h5" style={{ margin: '0.5em' }}>
        {profile.summary}
      </Typography>
      <Typography variant="h6" style={{ margin: '0.5em' }}>
        {profile.target}
      </Typography>
      <MailLink />
    </Box>
  );
};

export default Bios;
