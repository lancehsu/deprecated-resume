import React, { FC } from 'react';
import { Box, Chip, Divider, Typography } from '@material-ui/core';

interface SkillListProps {
  title: string;
  skills: string[];
}
const SkillList: FC<SkillListProps> = ({ title, skills }) => {
  return (
    <Box>
      <Typography variant="h4" style={{ margin: '0.5em' }}>
        {title}
      </Typography>
      <Divider variant="fullWidth" style={{ margin: '0.5em 0' }} />
      {skills.map((skill, i) => (
        <Chip key={i} style={{ margin: '0.1em' }} color="primary" label={skill} />
      ))}
    </Box>
  );
};

export default SkillList;
