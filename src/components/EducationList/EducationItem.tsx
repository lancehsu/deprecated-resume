import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimelineConnector from '@material-ui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator/TimelineSeparator';
import { EducationInfo } from '../../../static/content/resumeContentType';
import RightTimelineItem from '../RightTimelineItem';
import InfoContent from '../InfoContent';

interface EducationItemProps {
  name: string;
  info: EducationInfo;
}
const EducationItem: FC<EducationItemProps> = ({ name, info }) => {
  return (
    <RightTimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{`${info.degree}, (${info.from}-${info.to})`}</Typography>
        {info.content?.map((item, i) => {
          return <InfoContent key={i} name={item.name} url={item.url} details={item.details} />;
        })}
      </TimelineContent>
    </RightTimelineItem>
  );
};

export default EducationItem;
