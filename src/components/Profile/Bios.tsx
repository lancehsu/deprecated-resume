import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

import LinkedInLinkIcon from './LinkedInLInkIcon';
import GithubLinkIcon from './GithubLinkIcon';
import MailLink from './MailLink';

const Bios: FC = () => {
  return (
    <Box className="bios" style={{ width: '60em', margin: '1em' }}>
      <Typography variant="h2">Kung-Ling Hsu</Typography>
      <Box style={{ margin: '0.5em' }}>
        <LinkedInLinkIcon />
        <GithubLinkIcon />
      </Box>
      <Typography variant="h5" style={{ margin: '0.5em' }}>
        A detail-oriented and dependable software engineer seeking a position to offer expertise in
        HTML/CSS/JavaScript, React.js, Redux, Apollo GraphQL, Next.js to develop web application.
      </Typography>
      <Typography variant="h6" style={{ margin: '0.5em' }}>
        Front-end/Full-stack engineer
      </Typography>
      <MailLink />
    </Box>
  );
};

export default Bios;
