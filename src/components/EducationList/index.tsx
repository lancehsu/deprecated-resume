import React, { FC } from 'react';
import Timeline from '@material-ui/lab/Timeline/Timeline';
import { Box, Typography } from '@material-ui/core';

import EducationItem from './EducationItem';
import { education } from '../../content/resumeContent';
import { Colleges } from '../../content/resumeContentType';
import useStyles from '../../styles/useStyles';

const EducationList: FC = () => {
  const classes = useStyles();
  const collegeNames = Object.keys(education) as Colleges[];
  return (
    <Box className={classes.block}>
      <Typography variant="h5">Education</Typography>
      <Timeline>
        {collegeNames.map((name, i) => (
          <EducationItem key={i} name={name} info={education[name]} />
        ))}
      </Timeline>
    </Box>
  );
};

export default EducationList;
