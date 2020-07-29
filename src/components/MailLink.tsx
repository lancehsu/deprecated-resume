import React, { FC } from 'react';
import { MailOutline } from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';

const MailLink: FC = () => (
  <Box style={{ display: 'flex', alignItems: 'center', margin: '0.5em' }}>
    <MailOutline style={{ fontSize: '30', margin: '0.1em' }} />
    <a href="lancehsu12@gmail.com">
      <Typography color="primary" variant="h6">
        lancehsu12@gmail.com
      </Typography>
    </a>
  </Box>
);

export default MailLink;
