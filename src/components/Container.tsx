import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import Profile from './Profile';

const Container: FC = () => {
  return (
    <Box className="container" style={{ width: '100vw', height: '100vh' }}>
      <Profile />
      <div>OK</div>
    </Box>
  );
};

export default Container;
