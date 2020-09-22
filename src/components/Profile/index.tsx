import React, { FC } from 'react';
import { Box, Hidden } from '@material-ui/core';
import ProfileImage from './ProfileImage';
import Bios from './Bios';
import useStyles from '../../styles/useStyles';

const Profile: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.block} style={{ display: 'flex' }}>
      <Hidden xsDown>
        <ProfileImage />
      </Hidden>
      <Bios />
    </Box>
  );
};

export default Profile;
