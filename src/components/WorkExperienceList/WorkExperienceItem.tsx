import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import TimelineConnector from '@material-ui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator/TimelineSeparator';
import { WorkExperienceInfo } from '../../content/resumeContentType';
import RightTimelineItem from '../RightTimelineItem';

interface WorkTimelineItemProps {
  name: string;
  info: WorkExperienceInfo;
}
const WorkTimelineItem: FC<WorkTimelineItemProps> = ({ name, info }) => {
  return (
    <RightTimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h5">{`${info.title}, (${info.from}-${info.to})`}</Typography>
        {info.content.map((item, i) => {
          if (item.url)
            return (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                style={{ textDecoration: 'none' }}
              >
                <Typography color="primary" variant="body1">
                  {item.name}
                </Typography>
              </a>
            );

          return (
            <Typography key={i} variant="body1">
              {item.name}
            </Typography>
          );
        })}
      </TimelineContent>
    </RightTimelineItem>
  );
};

export default WorkTimelineItem;
