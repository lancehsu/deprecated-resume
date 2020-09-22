import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import LinkedInLinkIcon from './LinkedInLInkIcon';
import GithubLinkIcon from './GithubLinkIcon';
import MailLink from './MailLink';
import { profile } from '../../../static/content/resumeContent';

const Bios: FC = () => {
  return (
    <Box className="bios" style={{ width: '80%', margin: '1em' }}>
      <Typography variant="h3">{profile.name}</Typography>
      <Typography variant="h5" style={{ margin: '0.5em' }}>
        {profile.summary}
      </Typography>
      <Typography variant="h6" style={{ margin: '0.5em' }}>
        {profile.target}
      </Typography>
      <Box style={{ margin: '0.5em' }}>
        <LinkedInLinkIcon />
        <GithubLinkIcon />
      </Box>
      <MailLink />
    </Box>
  );
};

export default Bios;
