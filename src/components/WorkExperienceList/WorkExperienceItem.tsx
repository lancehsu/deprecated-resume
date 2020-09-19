import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimelineConnector from '@material-ui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator/TimelineSeparator';
import { WorkExperienceInfo } from '../../../static/content/resumeContentType';
import RightTimelineItem from '../RightTimelineItem';
import InfoContent from '../InfoContent';

interface WorkExperienceItemProps {
  name: string;
  info: WorkExperienceInfo;
}
const WorkExperienceItem: FC<WorkExperienceItemProps> = ({ name, info }) => {
  return (
    <RightTimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h4">{`${info.title}, (${info.from}-${info.to})`}</Typography>
        {info.content.map((item, i) => {
          return <InfoContent key={i} name={item.name} url={item.url} details={item.details} />;
        })}
      </TimelineContent>
    </RightTimelineItem>
  );
};

export default WorkExperienceItem;
