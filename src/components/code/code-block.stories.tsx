import { type Meta, type StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as DocBlock from '@storybook/addon-docs/blocks';
import CodeBlock from './code-block';
import type { CodeBlockProps } from './code-block.types';

const SAMPLE_COMMAND = `kubectl apply -f deployment.yaml
kubectl get pods -n percona
kubectl logs -f pmm-server-0`;

const meta: Meta<typeof CodeBlock> = {
  title: 'Data display/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Block-level code for multi-line snippets. Renders semantic `<pre><code>` markup with theme-aware surfaces and optional copy via `CopyToClipboardButton`.',
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
    children: SAMPLE_COMMAND,
    copyable: false,
    showCopyButtonText: false,
    copyCommand: 'Copy',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The code content (string, preserves line breaks).',
      table: { category: 'Content' },
    },
    copyable: {
      control: 'boolean',
      description: 'Shows a copy button that copies the full block text.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    showCopyButtonText: {
      control: 'boolean',
      description: 'When `copyable`, renders a labeled button instead of icon-only.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    copyCommand: {
      control: 'text',
      description: 'Label for the copy button when `showCopyButtonText` is true.',
      table: { category: 'Behavior', defaultValue: { summary: "'Copy'" } },
    },
    sx: {
      control: false,
      description: 'MUI System prop for the outer wrapper.',
      table: { category: 'Advanced' },
    },
    'data-testid': {
      control: false,
      table: { category: 'Advanced' },
    },
  },
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const Playground: Story = {};

export const WithCopy: Story = {
  args: {
    copyable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only copy affordance in the top-right corner.',
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
        story: 'Labeled copy button for clearer affordance in docs or onboarding flows.',
      },
    },
  },
};

export const InContext: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Typical usage below a heading with explanatory copy.',
      },
    },
  },
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <Typography variant="sectionHeading" sx={{ mb: 1 }}>
        Install PMM Client
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Run the following on each database host you want to monitor.
      </Typography>
      <CodeBlock copyable>{SAMPLE_COMMAND}</CodeBlock>
    </Box>
  ),
};
