import { type Meta, type StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as DocBlock from '@storybook/addon-docs/blocks';
import CopyToClipboardButton from './CopyToClipboardButton';
import type { CopyToClipboardButtonProps } from './CopyToClipboardButton.types';

const meta: Meta<typeof CopyToClipboardButton> = {
  title: 'Inputs/Copy to Clipboard Button',
  component: CopyToClipboardButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Copies text to the clipboard and shows a brief confirmation tooltip. Used by `CodeBlock` and `CodeCopyBlock`. Renders as an icon button by default, or a labeled button when `showCopyButtonText` is true.',
      },
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Subtitle />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
  },
  args: {
    textToCopy: 'kubectl get pods -n percona',
    showCopyButtonText: false,
    copyCommand: 'Copy',
  },
  argTypes: {
    textToCopy: {
      control: 'text',
      description: 'String written to the clipboard on click.',
      table: { category: 'Content' },
    },
    showCopyButtonText: {
      control: 'boolean',
      description: 'Renders a labeled button instead of icon-only.',
      table: { category: 'Appearance', defaultValue: { summary: 'false' } },
    },
    copyCommand: {
      control: 'text',
      description: 'Button label when `showCopyButtonText` is true.',
      table: { category: 'Content', defaultValue: { summary: "'Copy'" } },
    },
    iconSx: {
      control: false,
      table: { category: 'Advanced' },
    },
    buttonProps: {
      control: false,
      table: { category: 'Advanced' },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CopyToClipboardButtonProps>;

export const Playground: Story = {};

export const IconOnly: Story = {
  args: {
    showCopyButtonText: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default compact affordance for toolbars and code blocks.',
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    showCopyButtonText: true,
    copyCommand: 'Copy command',
  },
  parameters: {
    docs: {
      description: {
        story: 'Labeled variant for clearer call-to-action in docs or forms.',
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only and labeled variants side by side.',
      },
    },
  },
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <CopyToClipboardButton {...args} showCopyButtonText={false} />
      <CopyToClipboardButton {...args} showCopyButtonText copyCommand="Copy" />
    </Stack>
  ),
};

export const InContext: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Typical pairing with a read-only value the user may need to copy.',
      },
    },
  },
  render: (args) => (
    <Stack spacing={1} sx={{ minWidth: 320 }}>
      <Typography variant="sectionHeading">Connection string</Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" sx={{ flex: 1, wordBreak: 'break-all' }}>
          {args.textToCopy}
        </Typography>
        <CopyToClipboardButton {...args} showCopyButtonText={false} />
      </Stack>
    </Stack>
  ),
};
