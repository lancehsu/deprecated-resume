import React, { FC } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { profile } from '../../../public/resumeContent';

const ProfileImage: FC = () => {
  return (
    <Box style={{ width: '9em', height: '9em', margin: '1em' }}>
      <Avatar variant="circle" src={profile.image} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default ProfileImage;
