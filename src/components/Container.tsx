import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import Profile from './Profile';

const Container: FC = () => {
  return (
    <Box className="container" style={{ width: '100%', height: '100%', margin: '2em' }}>
      <Profile />
    </Box>
  );
};

export default Container;
