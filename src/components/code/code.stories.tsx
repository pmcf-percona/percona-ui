import { type Meta, type StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as DocBlock from '@storybook/addon-docs/blocks';
import Code from './code';
import type { CodeProps } from './code.types';

const meta: Meta<typeof Code> = {
  title: 'Data display/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Inline code for short snippets inside body text. Renders a semantic `<code>` element with theme-aware monospace styling.',
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
    children: 'npm install @percona/percona-ui',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The inline code content.',
      table: { category: 'Content' },
    },
    sx: {
      control: false,
      description: 'MUI System prop for style overrides.',
      table: { category: 'Advanced' },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2, maxWidth: 480 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<CodeProps>;

export const Playground: Story = {};

export const InParagraph: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use inline `Code` inside running text for commands, paths, or identifiers.',
      },
    },
  },
  render: ({ children }) => (
    <Typography variant="body1">
      Run <Code>{children}</Code> in your project root, then restart the dev server.
    </Typography>
  ),
};

export const MultipleSnippets: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Several inline snippets in one sentence.',
      },
    },
  },
  render: () => (
    <Typography variant="body1">
      Set <Code>DB_HOST</Code> to <Code>localhost</Code> and <Code>DB_PORT</Code> to{' '}
      <Code>3306</Code>.
    </Typography>
  ),
};
