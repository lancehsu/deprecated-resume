import React, { FC } from 'react';
import { MailOutline } from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';
import { profile } from '../../content/resumeContent';

const MailLink: FC = () => (
  <Box style={{ display: 'flex', alignItems: 'center' }}>
    <MailOutline style={{ fontSize: '30', margin: '0.1em' }} />
    <a style={{ textDecoration: 'none' }} href={profile.mail}>
      <Typography color="primary" variant="h6">
        {profile.mail}
      </Typography>
    </a>
  </Box>
);

export default MailLink;
