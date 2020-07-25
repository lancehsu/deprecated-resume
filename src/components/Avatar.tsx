import React, { FC } from 'react';

const Avatar: FC = () => {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: 'url("/photo.jpg")',
        backgroundSize: 'cover',
        width: '7em',
        height: '7em',
        borderRadius: '50%',
      }}
    />
  );
};

export default Avatar;
