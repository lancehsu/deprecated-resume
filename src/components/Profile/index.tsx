import React, { FC } from 'react';
import { Box, Hidden } from '@material-ui/core';
import ProfileImage from './ProfileImage';
import Bios from './Bios';

const Profile: FC = () => {
  return (
    <Box className="bios" style={{ margin: '2em', display: 'flex' }}>
      <Hidden xsDown>
        <ProfileImage />
      </Hidden>
      <Bios />
    </Box>
  );
};

export default Profile;
