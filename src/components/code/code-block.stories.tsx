import { type Meta, type StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as DocBlock from '@storybook/addon-docs/blocks';
import CodeBlock from './code-block';
import type { CodeBlockProps } from './code-block.types';

const SAMPLE = `helm install percona-db \\
  --create-namespace \\
  --namespace my-namespace \\
  percona/percona-db`;

const meta: Meta<typeof CodeBlock> = {
  title: 'Data display/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Block-level code for multi-line snippets. Renders semantic `<pre><code>` markup. Optional copy uses `CopyToClipboardButton`.',
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
    children: SAMPLE,
    copyable: false,
    showCopyButtonText: false,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The code block content.',
      table: { category: 'Content' },
    },
    copyable: {
      control: 'boolean',
      description: 'Shows a copy button that copies the full block content.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    showCopyButtonText: {
      control: 'boolean',
      description: 'When `copyable` is true, renders a labeled copy button instead of icon-only.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    copyCommand: {
      control: 'text',
      description: 'Label for the copy button when `showCopyButtonText` is true.',
      table: { category: 'Behavior', defaultValue: { summary: "'Copy command'" } },
    },
    sx: {
      control: false,
      description: 'MUI System prop for style overrides on the `<pre>` element.',
      table: { category: 'Advanced' },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, maxWidth: 640 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const Playground: Story = {};

export const WithCopyIcon: Story = {
  args: {
    copyable: true,
    showCopyButtonText: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only copy button in the top-right corner.',
      },
    },
  },
};

export const WithCopyLabel: Story = {
  args: {
    copyable: true,
    showCopyButtonText: true,
    copyCommand: 'Copy command',
  },
  parameters: {
    docs: {
      description: {
        story: 'Labeled copy button for clearer affordance.',
      },
    },
  },
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pair a code block with surrounding documentation text.',
      },
    },
  },
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="sectionHeading">Install command</Typography>
      <Typography variant="body2" color="text.secondary">
        Run this in a cluster with Helm 3.
      </Typography>
      <CodeBlock {...args} copyable showCopyButtonText />
    </Box>
  ),
};
