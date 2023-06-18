import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: '275px',
    fontSize: '20px',
    background: '#D9D9D9',
    borderRadius: '6px',
    color: '#000',
    padding: '20px',
  },
});

export default function TooltipText({ text, children }) {
  return (
    <div>
      <CustomTooltip title={text}>{children}</CustomTooltip>
    </div>
  );
}
