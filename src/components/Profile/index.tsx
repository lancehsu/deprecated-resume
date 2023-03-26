import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import Bios from './Bios';
import useStyles from '../../styles/useStyles';

const Profile: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.block} style={{ display: 'flex' }}>
      <Bios />
    </Box>
  );
};

export default Profile;
