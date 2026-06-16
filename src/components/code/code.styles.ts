import type { Theme } from '@mui/material/styles';

export const codeFontFamily = '"Roboto Mono", "Helvetica", "Arial", sans-serif';

export const getInlineCodeSx = (theme: Theme) => ({
  fontFamily: codeFontFamily,
  fontSize: '0.875em',
  fontWeight: 400,
  lineHeight: 1.5,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.action.selected,
  borderRadius: '4px',
  padding: '2px 6px',
  fontVariantLigatures: 'none',
});

export const getBlockPreSx = (theme: Theme) => ({
  margin: 0,
  padding: theme.spacing(2),
  overflow: 'auto',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
});

export const blockCodeSx = {
  fontFamily: codeFontFamily,
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  fontVariantLigatures: 'none',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  display: 'block',
} as const;
