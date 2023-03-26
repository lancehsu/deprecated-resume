import React, { FC } from 'react';
import { Link, Typography } from '@material-ui/core';
import { Content } from '../content/resumeContentType';

const InfoContent: FC<Content> = ({ title, url, details }) => (
  <>
    {title && <InfoTitle title={title} url={url} />}
    <ul style={{ listStyleType: 'disc' }}>
      {details?.map((detail, i) => (
        <li key={i}>
          {detail.url ? (
            <Link href={detail.url} target="_blank" rel="noopener noreferrer">
              <Typography color="primary" variant="h6">
                {detail.title}
              </Typography>
            </Link>
          ) : (
            <Typography variant="h6">{detail.title}</Typography>
          )}
        </li>
      ))}
    </ul>
  </>
);

interface InfoTitleProps {
  title: string;
  url?: string;
}
const InfoTitle: FC<InfoTitleProps> = ({ title, url }) =>
  url ? (
    <Typography color="primary" variant="h6" style={{ margin: '0.1em' }}>
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
    <Typography variant="h6" style={{ margin: '0.1em' }}>
      {title}
    </Typography>
  );

export default InfoContent;
