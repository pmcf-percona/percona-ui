import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import CopyToClipboardButton from '../buttons/copy-to-clipboard-button';
import { getCodeBlockCodeSx, getCodeBlockPreSx } from './code.styles';
import type { CodeBlockProps } from './code-block.types';

const CodeBlock = ({
  children,
  copyable = false,
  showCopyButtonText = false,
  copyCommand,
  sx,
  'data-testid': dataTestId,
}: CodeBlockProps) => {
  const theme = useTheme();
  const preSx = [getCodeBlockPreSx(theme, { copyable }), ...(sx ? [sx] : [])] as SxProps<Theme>;

  return (
    <Box sx={{ position: 'relative', width: '100%' }} data-testid={dataTestId}>
      <Box component="pre" sx={preSx}>
        <Box component="code" sx={getCodeBlockCodeSx()}>
          {children}
        </Box>
      </Box>
      {copyable && (
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        >
          <CopyToClipboardButton
            textToCopy={children}
            showCopyButtonText={showCopyButtonText}
            copyCommand={copyCommand}
            buttonProps={{ size: 'small', color: 'primary' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default CodeBlock;
