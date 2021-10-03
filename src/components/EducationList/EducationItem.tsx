import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimelineConnector from '@material-ui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator/TimelineSeparator';
import { EducationInfo } from '../../content/resumeContentType';
import RightTimelineItem from '../RightTimelineItem';
import InfoContent from '../InfoContent';

interface EducationItemProps {
  name: string;
  info: EducationInfo;
}
const EducationItem: FC<EducationItemProps> = ({ name, info }) => (
  <RightTimelineItem>
    <TimelineSeparator>
      <TimelineDot />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">{`${info.degree}, (${info.from} - ${info.to})`}</Typography>
      {info.content?.map((item, i) => (
        <InfoContent key={i} title={item.title} url={item.url} details={item.details} />
      ))}
    </TimelineContent>
  </RightTimelineItem>
);

export default EducationItem;
