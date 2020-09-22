import React, { FC } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { profile } from '../../content/resumeContent';

const ProfileImage: FC = () => {
  return (
    <Box style={{ width: '10em', height: '10em', margin: '1em' }}>
      <Avatar variant="circle" src={profile.image} style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default ProfileImage;
