import type { SxProps, Theme } from '@mui/material/styles';

export type CodeBlockProps = {
  children: string;
  copyable?: boolean;
  showCopyButtonText?: boolean;
  copyCommand?: string;
  sx?: SxProps<Theme>;
  'data-testid'?: string;
};
