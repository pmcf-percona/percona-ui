import Box from '@mui/material/Box';
import CopyToClipboardButton from '../buttons/copy-to-clipboard-button';
import type { CodeBlockProps } from './code-block.types';
import { blockCodeSx, getBlockPreSx } from './code.styles';

const CodeBlock = ({
  children,
  copyable = false,
  showCopyButtonText = false,
  copyCommand = 'Copy',
  sx,
  ...rest
}: CodeBlockProps) => (
  <Box sx={[{ position: 'relative', width: '100%' }, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
    <Box
      component="pre"
      sx={(theme) => ({
        ...getBlockPreSx(theme),
        ...(copyable ? { paddingRight: theme.spacing(6) } : {}),
      })}
    >
      <Box component="code" sx={blockCodeSx}>
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

export default CodeBlock;
