import { Box } from '@material-ui/core';
import React, { FC } from 'react';

const Avatar: FC = () => {
  return (
    <Box style={{ width: '7em', height: '7em', margin: '1em' }}>
      <div
        className="avatar"
        style={{
          backgroundImage: 'url("/photo.jpg")',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
};

export default Avatar;
