import { Box, Chip, Divider, Typography } from '@material-ui/core';
import React, { FC } from 'react';

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
      {skills.map((skill) => (
        <Chip style={{ margin: '0.1em' }} color="primary" label={skill} />
      ))}
    </Box>
  );
};

export default SkillList;
