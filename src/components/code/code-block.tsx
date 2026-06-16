import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import CopyToClipboardButton from '../buttons/copy-to-clipboard-button';
import { CODE_FONT_FAMILY } from './code.constants';
import type { CodeBlockProps } from './code-block.types';

const preSx = (copyable: boolean) => (theme: Theme) => ({
  margin: 0,
  padding: theme.spacing(2),
  paddingRight: copyable ? theme.spacing(6) : theme.spacing(2),
  backgroundColor: theme.palette.surfaces?.low ?? theme.palette.background.default,
  border: `1px solid ${theme.palette.dividers?.divider ?? theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'auto',
  fontFamily: CODE_FONT_FAMILY,
  fontSize: theme.typography.body2.fontSize ?? '0.875rem',
  lineHeight: theme.typography.body2.lineHeight ?? 1.5,
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
});

const blockCodeSx = {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  backgroundColor: 'transparent',
  padding: 0,
};

const CodeBlock = ({
  children,
  copyable = false,
  showCopyButtonText,
  copyCommand,
  sx,
  'data-testid': dataTestId,
}: CodeBlockProps) => (
  <Box sx={sx} data-testid={dataTestId}>
    <Box sx={{ position: 'relative' }}>
      {copyable && (
        <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CopyToClipboardButton
            textToCopy={children}
            showCopyButtonText={showCopyButtonText}
            copyCommand={copyCommand}
            buttonProps={{ size: 'small', color: 'primary' }}
          />
        </Box>
      )}
      <Box component="pre" sx={preSx(copyable)}>
        <Box component="code" sx={blockCodeSx}>
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default CodeBlock;
