import React, { FC } from 'react';
import Timeline from '@material-ui/lab/Timeline/Timeline';
import { Box, Typography } from '@material-ui/core';

import WorkExperienceItem from './WorkExperienceItem';
import { workExperience } from '../../../static/content/resumeContent';
import { Companies } from '../../../static/content/resumeContentType';

const WorkExperienceList: FC = () => {
  const companyNames = Object.keys(workExperience) as Companies[];
  return (
    <Box style={{ margin: '2em' }}>
      <Typography variant="h2">Work Experience</Typography>
      <Timeline>
        {companyNames.map((name, i) => (
          <WorkExperienceItem key={i} name={name} info={workExperience[name]} />
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkExperienceList;
