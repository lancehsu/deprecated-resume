import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import Avatar from './Avatar';
import Bios from './Bios';

const Profile: FC = () => {
  return (
    <Box className="bios" style={{ margin: '2em', display: 'flex' }}>
      <Avatar />
      <Bios />
    </Box>
  );
};

export default Profile;
