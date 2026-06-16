import type { Theme } from '@mui/material/styles';

export const fontCode =
  '"Roboto Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

export const getInlineCodeSx = (theme: Theme) => ({
  fontFamily: fontCode,
  fontSize: '0.8125rem',
  lineHeight: 1.5,
  fontWeight: 400,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.action.selected,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  px: 0.75,
  py: 0.25,
  whiteSpace: 'break-spaces',
  wordBreak: 'break-word',
});

type CodeBlockStyleOptions = {
  copyable?: boolean;
};

export const getCodeBlockPreSx = (
  theme: Theme,
  { copyable = false }: CodeBlockStyleOptions = {}
) => ({
  fontFamily: fontCode,
  fontSize: '0.8125rem',
  lineHeight: 1.5,
  fontWeight: 400,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '5px',
  m: 0,
  p: 2,
  pr: copyable ? 6 : 2,
  overflow: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

export const getCodeBlockCodeSx = () => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  p: 0,
  m: 0,
  display: 'block',
});
