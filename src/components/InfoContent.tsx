import React, { FC } from 'react';
import { Link, Typography } from '@material-ui/core';
import { Content } from '../content/resumeContentType';

const InfoContent: FC<Content> = ({ title, url, details }) => (
  <>
    <InfoTitle title={title} url={url} />
    {details?.map((detail, i) =>
      detail.url ? (
        <Link href={detail.url} target="_blank" rel="noopener noreferrer">
          <Typography key={i} color="primary" variant="h6" style={{ marginLeft: '2em' }}>
            {detail.title}
          </Typography>
        </Link>
      ) : (
        <Typography key={i} variant="h6" style={{ marginLeft: '2em' }}>
          {detail.title}
        </Typography>
      )
    )}
  </>
);

interface InfoTitleProps {
  title: string;
  url?: string;
}
const InfoTitle: FC<InfoTitleProps> = ({ title, url }) =>
  url ? (
    <Typography color="primary" variant="h5" style={{ margin: '0.1em' }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {title}
      </a>
    </Typography>
  ) : (
    <Typography variant="h5" style={{ margin: '0.1em' }}>
      {title}
    </Typography>
  );

export default InfoContent;
