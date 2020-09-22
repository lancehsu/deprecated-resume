import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { project } from '../../../static/content/resumeContent';
import ProjectItem from './ProjectItem';
import { ProjectNames } from '../../../static/content/resumeContentType';
import useStyles from '../../styles/useStyles';

const ProjectList: FC = () => {
  const classes = useStyles();
  const projectNames = Object.keys(project) as ProjectNames[];

  return (
    <Box className={classes.block}>
      <Typography variant="h3">Project</Typography>
      {projectNames.map((name, i) => (
        <ProjectItem key={i} name={name} info={project[name]} />
      ))}
    </Box>
  );
};

export default ProjectList;
