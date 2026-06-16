import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { getInlineCodeSx } from './code.styles';
import type { CodeProps } from './code.types';

const Code = forwardRef<HTMLElement, CodeProps>(({ sx, ...rest }, ref) => {
  const theme = useTheme();
  const mergedSx = [getInlineCodeSx(theme), ...(sx ? [sx] : [])] as SxProps<Theme>;

  return <Box ref={ref} component="code" sx={mergedSx} {...rest} />;
});

Code.displayName = 'Code';

export default Code;
