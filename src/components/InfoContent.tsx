import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

interface InfoContentProps {
  name: string;
  url?: string;
  details?: { name: string; url?: string }[];
}
const InfoContent: FC<InfoContentProps> = ({ name, url, details }) => {
  return (
    <>
      <InfoTitle name={name} url={url} />
      {details?.map((detail, i) =>
        detail.url ? (
          <Typography key={i} color="primary" variant="h6" style={{ marginLeft: '2em' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={detail.url}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {detail.name}
            </a>
          </Typography>
        ) : (
          <Typography key={i} variant="h6" style={{ marginLeft: '2em' }}>
            {detail.name}
          </Typography>
        )
      )}
    </>
  );
};

interface InfoTitleProps {
  name: string;
  url?: string;
}
const InfoTitle: FC<InfoTitleProps> = ({ name, url }) =>
  url ? (
    <Typography color="primary" variant="h5" style={{ margin: '0.1em' }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {name}
      </a>
    </Typography>
  ) : (
    <Typography variant="h5" style={{ margin: '0.1em' }}>
      {name}
    </Typography>
  );

export default InfoContent;
