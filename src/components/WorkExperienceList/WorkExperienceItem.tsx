import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimelineConnector from '@material-ui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator/TimelineSeparator';
import { WorkExperienceInfo } from '../../content/resumeContentType';
import RightTimelineItem from '../RightTimelineItem';
import InfoContent from '../InfoContent';

interface WorkExperienceItemProps {
  name: string;
  info: WorkExperienceInfo;
}
const WorkExperienceItem: FC<WorkExperienceItemProps> = ({ name, info }) => (
  <RightTimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '30px',
        }}
      >
        <Typography variant="h6" style={{ fontWeight: '600' }}>
          {name}, {info.location}
        </Typography>
        {info.from && info.to && (
          <Typography variant="h6">
            {info.from} - {info.to}
          </Typography>
        )}
      </div>
      <Typography variant="h6">{info.title}</Typography>
      {info.content.map((item, i) => (
        <InfoContent key={i} title={item.title} url={item.url} details={item.details} />
      ))}
    </TimelineContent>
  </RightTimelineItem>
);

export default WorkExperienceItem;
