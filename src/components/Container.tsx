import React, { FC } from 'react';
import { Box } from '@material-ui/core';

import Profile from './Profile';
import Skills from './Skills';
import WorkExperienceList from './WorkExperienceList';
import EducationList from './EducationList';
import ProjectList from './ProjectList';

const Container: FC = () => {
  return (
    <Box className="container" style={{ margin: '4em' }}>
      <Profile />
      <Skills />
      <WorkExperienceList />
      <EducationList />
      <ProjectList />
    </Box>
  );
};

export default Container;
