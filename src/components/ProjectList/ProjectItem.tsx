import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { ProjectInfo } from '../../content/resumeContentType';

interface ProjectItemProps {
  name: string;
  info: ProjectInfo;
}
const ProjectItem: FC<ProjectItemProps> = ({ name, info }) => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '1em', width: '100%' }}>
      <Box style={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-between' }}>
        <Box style={{ margin: '1em' }}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" style={{ margin: '0.5em' }}>
            {info.content}
          </Typography>
        </Box>
        <Typography color="primary" variant="h4" style={{ alignSelf: 'center', margin: '0.5em' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={info.githubLink}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Github
          </a>
        </Typography>
      </Box>
      <img width="500em" src={info.image} alt="404" />
    </Box>
  );
};

export default ProjectItem;
