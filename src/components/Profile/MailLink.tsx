import React, { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { MailOutline } from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';
import { profile } from '../../content/resumeContent';

const MailLink: FC = () => (
  <Box style={{ display: 'flex', alignItems: 'center' }}>
    <MailOutline style={{ fontSize: '30', margin: '0.1em' }} />
    <OutboundLink style={{ textDecoration: 'none' }} href={`mailto: ${profile.mail}`}>
      <Typography color="primary" variant="h6">
        {profile.mail}
      </Typography>
    </OutboundLink>
  </Box>
);

export default MailLink;
