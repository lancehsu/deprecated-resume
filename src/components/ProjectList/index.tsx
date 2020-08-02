import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { project } from '../../content/resumeContent';
import ProjectItem from './ProjectItem';
import { ProjectNames } from '../../content/resumeContentType';

const ProjectList: FC = () => {
  const projectNames = Object.keys(project) as ProjectNames[];

  return (
    <Box style={{ margin: '2em' }}>
      <Typography variant="h2">Project</Typography>
      {projectNames.map((name, i) => (
        <ProjectItem key={i} name={name} info={project[name]} />
      ))}
    </Box>
  );
};

export default ProjectList;
