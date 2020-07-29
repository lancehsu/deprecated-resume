import React, { FC } from 'react';
import { Box, Avatar } from '@material-ui/core';

const ProfileImage: FC = () => {
  return (
    <Box style={{ width: '9em', height: '9em', margin: '1.5em' }}>
      <Avatar src="/photo.png" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default ProfileImage;
