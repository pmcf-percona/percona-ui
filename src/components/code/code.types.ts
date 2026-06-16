import type { HTMLAttributes } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';

export type CodeProps = HTMLAttributes<HTMLElement> & {
  sx?: SxProps<Theme>;
};
