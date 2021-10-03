import React, { FC } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { Brightness2, BrightnessHigh } from '@material-ui/icons';

interface DarkButtonProps {
  darkMode: boolean;
  onClick: () => void;
}
const DarkButton: FC<DarkButtonProps> = ({ darkMode, onClick }) => (
  <Tooltip title={darkMode ? 'Light' : 'Dark'}>
    <IconButton onClick={onClick}>{darkMode ? <BrightnessHigh /> : <Brightness2 />}</IconButton>
  </Tooltip>
);

export default DarkButton;
