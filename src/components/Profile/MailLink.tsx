import React, { FC } from 'react';
import { MailOutline } from '@material-ui/icons';
import { Box, Link, Typography } from '@material-ui/core';
import { profile } from '../../content/resumeContent';

const MailLink: FC = () => (
  <Box style={{ display: 'flex', alignItems: 'center' }}>
    <MailOutline style={{ fontSize: '30', margin: '0.1em' }} />
    <Link style={{ textDecoration: 'none' }} href={`mailto: ${profile.mail}`}>
      <Typography color="primary" variant="h6">
        {profile.mail}
      </Typography>
    </Link>
  </Box>
);

export default MailLink;
