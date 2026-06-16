import type { BoxProps } from '@mui/material/Box';

export type CodeBlockProps = {
  children: string;
  copyable?: boolean;
  showCopyButtonText?: boolean;
  copyCommand?: string;
} & Omit<BoxProps, 'children'>;
