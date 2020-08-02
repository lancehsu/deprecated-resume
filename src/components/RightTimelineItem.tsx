import { withStyles } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem/TimelineItem';

const RightTimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      flex: 0,
      padding: 0,
    },
  },
})(TimelineItem);

export default RightTimelineItem;
