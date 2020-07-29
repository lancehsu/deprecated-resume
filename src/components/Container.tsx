import { Box } from '@material-ui/core';
import React, { FC } from 'react';

import Profile from './Profile';
import Skills from './Skills';

const Container: FC = () => {
  return (
    <Box className="container" style={{ margin: '4em' }}>
      <Profile />
      <Skills />
    </Box>
  );
};

export default Container;
