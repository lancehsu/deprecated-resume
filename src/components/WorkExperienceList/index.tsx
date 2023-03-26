import React, { FC } from 'react';
import Timeline from '@material-ui/lab/Timeline/Timeline';
import { Box, Typography } from '@material-ui/core';

import WorkExperienceItem from './WorkExperienceItem';
import { workExperience } from '../../content/resumeContent';
import { Companies } from '../../content/resumeContentType';
import useStyles from '../../styles/useStyles';

const WorkExperienceList: FC = () => {
  const classes = useStyles();
  const companyNames = Object.keys(workExperience) as Companies[];
  return (
    <Box className={classes.block}>
      <Typography variant="h5">Work Experience</Typography>
      <Timeline>
        {companyNames.map((name, i) => (
          <WorkExperienceItem key={i} name={name} info={workExperience[name]} />
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkExperienceList;
