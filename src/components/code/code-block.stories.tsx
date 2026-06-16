import { type Meta, type StoryObj } from '@storybook/react';
import * as DocBlock from '@storybook/blocks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CodeBlock from './code-block';
import type { CodeBlockProps } from './code-block.types';

const SAMPLE_COMMAND =
  'helm install percona-db percona/percona-db --create-namespace --namespace <NAMESPACE>';

const meta: Meta<CodeBlockProps> = {
  title: 'Data display/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Multi-line code display using semantic `<pre><code>`. Optional copy uses `CopyToClipboardButton`.',
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
      description: 'Block code content.',
      table: { category: 'Content' },
    },
    copyable: {
      control: 'boolean',
      description: 'Shows a copy button that copies the block content.',
      table: { category: 'Behavior', defaultValue: { summary: 'false' } },
    },
    showCopyButtonText: {
      control: 'boolean',
      description: 'When `copyable`, shows button label next to the icon.',
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
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, maxWidth: 640, width: '100%' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithoutCopy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Read-only block for logs, config snippets, or install commands.',
      },
    },
  },
  args: {
    children: SAMPLE_COMMAND,
    copyable: false,
  },
};

export const WithCopyIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only copy button in the top-right corner.',
      },
    },
  },
  args: {
    children: SAMPLE_COMMAND,
    copyable: true,
    showCopyButtonText: false,
  },
};

export const WithCopyLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Copy button with visible label — useful when the action should be explicit.',
      },
    },
  },
  args: {
    children: SAMPLE_COMMAND,
    copyable: true,
    showCopyButtonText: true,
    copyCommand: 'Copy command',
  },
};

export const Multiline: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Preserves line breaks for multi-line snippets.',
      },
    },
  },
  render: (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="sectionHeading">docker-compose.yml</Typography>
      <CodeBlock {...args}>
        {`services:
  db:
    image: percona/percona-server:8.0
    ports:
      - "3306:3306"`}
      </CodeBlock>
    </Box>
  ),
};
