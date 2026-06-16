import type { SxProps, Theme } from '@mui/material/styles';
import type { ComponentPropsWithoutRef } from 'react';

export type CodeProps = ComponentPropsWithoutRef<'code'> & {
  sx?: SxProps<Theme>;
};
