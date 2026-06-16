import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import type { CodeProps } from './code.types';
import { getInlineCodeSx } from './code.styles';

const Code = forwardRef<HTMLElement, CodeProps>(({ children, sx, ...rest }, ref) => (
  <Box
    component="code"
    ref={ref}
    sx={[(theme) => getInlineCodeSx(theme), ...(Array.isArray(sx) ? sx : [sx])]}
    {...rest}
  >
    {children}
  </Box>
));

Code.displayName = 'Code';

export default Code;
