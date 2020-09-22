import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { ProjectInfo } from '../../../static/content/resumeContentType';

interface ProjectItemProps {
  name: string;
  info: ProjectInfo;
}
const ProjectItem: FC<ProjectItemProps> = ({ name, info }) => {
  return (
    <Box style={{ display: 'flex', margin: '1em', width: '100%' }}>
      <Box style={{ display: 'flex', flexFlow: 'column', width: '40%' }}>
        <Box style={{ margin: '1em' }}>
          <Typography variant="h4" style={{ marginBottom: '1.5em' }}>
            {name}
          </Typography>
          <Typography variant="body1" style={{ margin: '0.5em' }}>
            {info.content}
          </Typography>
        </Box>
        <Typography color="primary" variant="h5" style={{ alignSelf: 'center', margin: '2em' }}>
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
      <Box style={{ width: '60%' }}>
        <img width="100%" src={info.image} alt="404" />
      </Box>
    </Box>
  );
};

export default ProjectItem;
