import React, { FC } from 'react';
import { Box } from '@material-ui/core';

import Profile from './Profile';
import Skills from './Skills';
import WorkExperienceList from './WorkExperienceList';
import EducationList from './Education';

const Container: FC = () => {
  return (
    <Box className="container" style={{ margin: '4em' }}>
      <Profile />
      <Skills />
      <WorkExperienceList />
      <EducationList />
    </Box>
  );
};

export default Container;
