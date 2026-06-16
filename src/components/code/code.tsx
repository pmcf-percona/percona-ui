import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import { CODE_FONT_FAMILY } from './code.constants';
import type { CodeProps } from './code.types';

const inlineCodeSx = (theme: Theme) => ({
  fontFamily: CODE_FONT_FAMILY,
  fontSize: theme.typography.caption.fontSize ?? '0.8125rem',
  lineHeight: theme.typography.caption.lineHeight ?? 1.375,
  fontWeight: theme.typography.caption.fontWeight ?? 400,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.action.selected,
  borderRadius: theme.shape.borderRadius,
  padding: '2px 6px',
  wordBreak: 'break-word',
});

const Code = forwardRef<HTMLElement, CodeProps>(({ sx, ...rest }, ref) => (
  <Box
    component="code"
    ref={ref}
    sx={[inlineCodeSx, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    {...rest}
  />
));

Code.displayName = 'Code';

export default Code;
