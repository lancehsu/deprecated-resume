import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import SkillList from './SkillList';
import { skills } from '../../content/resumeContent';
import useStyles from '../../styles/useStyles';

const Skills: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.block}>
      <Typography variant="h5">Skills</Typography>
      <Box display="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '3em' }}>
        <SkillList title="Proficient in" skills={skills.proficiency} />
        <SkillList title="Familiar with" skills={skills.familiar} />
        <SkillList title="Knowledge of" skills={skills.knowledge} />
      </Box>
    </Box>
  );
};

export default Skills;
