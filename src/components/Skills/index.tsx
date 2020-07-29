import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import SkillList from './SkillList';

const proficiency = [
  'HTML/CSS/JavaScript',
  'TypeScript',
  'React',
  'React hooks',
  'Apollo GraphQL',
  'Redux',
  'Redux-Thunk',
  'Next.js',
  'Babylon.js',
  'Konva.js',
  'Material UI',
  'Fluent UI',
  'i18next',
  'Git',
  'Github',
  'VSCode',
];

const familiar = ['Gatsby.js', 'Express.js', 'MongoDB', 'MATLAB', 'Webpack', 'Heroku', 'Vim'];

const knowledge = [
  'Java',
  'Python',
  'Cpp',
  'SQL',
  'Sentry',
  'Docker',
  'machine learning',
  'image processing',
  'computer graphic',
  'data structure & algorithms',
];

const Skills: FC = () => {
  return (
    <Box style={{ margin: '2em' }}>
      <Typography variant="h2">Skills</Typography>
      <Box display="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '3em' }}>
        <SkillList title="Proficiency" skills={proficiency} />
        <SkillList title="Familiar" skills={familiar} />
        <SkillList title="Knowledge" skills={knowledge} />
      </Box>
    </Box>
  );
};

export default Skills;
